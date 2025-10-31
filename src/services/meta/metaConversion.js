// Configuração da API de Conversão da Meta
let metaAccessToken = null;
let pixelId = null;

// Função para configurar as credenciais da Meta
export function setMetaCredentials(token, id) {
    console.log('Recebendo credenciais:', {
        token: token ? token.substring(0, 10) + '...' : 'ausente',
        id: id || 'ausente'
    });
    
    if (!token || !id) {
        console.error('Credenciais inválidas recebidas:', { 
            temToken: !!token, 
            temId: !!id 
        });
        return false;
    }
    
    metaAccessToken = token;
    pixelId = id;
    console.log('Meta Credentials configuradas com sucesso:', { 
        pixelId, 
        hasAccessToken: !!metaAccessToken,
        tokenPreview: metaAccessToken ? metaAccessToken.substring(0, 10) + '...' : 'ausente'
    });
    return true;
}

// Função para hash SHA-256nfiguração da API de Conversão da Meta
const META_ACCESS_TOKEN = '2256233544814402'; // Substitua pelo seu token
const PIXEL_ID = '784590180660067';

// Função para hash SHA-256
async function hashSHA256(text) {
    if (!text) return undefined;
    // Normaliza o texto: remove espaços, converte para minúsculas
    const normalizedText = text.trim().toLowerCase();
    const encoder = new TextEncoder();
    const data = encoder.encode(normalizedText);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// Função para obter IP do usuário
async function getUserIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Erro ao obter IP:', error);
        return '';
    }
}

// Função principal para enviar eventos para a Conversion API
export async function sendMetaConversion(eventName, userData = {}, customData = {}) {
    try {
        console.log('Estado atual das credenciais:', {
            temToken: !!metaAccessToken,
            tokenPreview: metaAccessToken ? metaAccessToken.substring(0, 10) + '...' : 'ausente',
            temPixelId: !!pixelId,
            pixelId: pixelId || 'ausente'
        });
        
        console.log('Iniciando envio de evento para Meta:', { 
            eventName, 
            hasUserData: !!Object.keys(userData).length,
            userData,
            customData
        });
        
        const ip = await getUserIP();
        
        const eventData = {
            event_name: eventName,
            event_time: Math.floor(Date.now() / 1000),
            action_source: 'website',
            event_source_url: window.location.href,
            user_data: {
                client_ip_address: ip,
                client_user_agent: navigator.userAgent,
                ...userData
            },
            custom_data: customData
        };
        
        const payload = {
            data: [eventData],
            test_event_code: "TEST61875"
        };
        
        if (!metaAccessToken || !pixelId) {
            throw new Error('Meta credentials não configuradas. Use setMetaCredentials primeiro.');
        }

        const response = await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${metaAccessToken}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        console.log(`Evento ${eventName} enviado para Meta Conversion API:`, result);
        return result;
    } catch (error) {
        console.error('Erro ao enviar evento para Meta Conversion API:', error);
    }
}

// Função para rastrear leads
export async function trackLead(source, userData = {}) {
    // Envia tanto para o Pixel quanto para a Conversion API
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
            content_name: `Lead - ${source}`,
            content_category: 'Imobiliária',
            value: 0.00,
            currency: 'BRL'
        });
    }
    
    // Prepara os dados do usuário com hash
    const hashedUserData = {
        em: userData.email ? await hashSHA256(userData.email) : undefined,
        ph: userData.telefone ? await hashSHA256(userData.telefone.replace(/\D/g, "")) : undefined,
        fn: userData.nome ? await hashSHA256(userData.nome.split(' ')[0]) : undefined,
        ln: userData.nome ? await hashSHA256(userData.nome.split(' ').slice(1).join(' ')) : undefined,
        ct: userData.cidade ? await hashSHA256(userData.cidade) : undefined,
        st: userData.estado ? await hashSHA256(userData.estado) : undefined,
        zp: userData.cep ? await hashSHA256(userData.cep.replace(/\D/g, "")) : undefined,
        country: await hashSHA256('br') // Código do país hasheado
    };
    
    await sendMetaConversion('Lead', hashedUserData, {
        lead_source: source,
        value: 0.00,
        currency: 'BRL'
    });
}

// Função para rastrear visualização de página
export async function trackPageView(userData = {}) {
    console.log('Iniciando trackPageView');
    if (typeof window !== 'undefined' && window.fbq) {
        console.log('Enviando PageView para fbq (Pixel)');
        window.fbq('track', 'PageView');
    }
    
    console.log('Enviando PageView para Conversion API');
    await sendMetaConversion('PageView', userData, {
        content_category: 'Page Interaction',
        content_name: window.location.pathname || '/',
        url: window.location.href
    });
    console.log('Evento PageView enviado com sucesso');
}

// Função para rastrear visualização de conteúdo
export async function trackViewContent(contentName, userData = {}) {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'ViewContent', {
            content_name: contentName,
            content_category: 'Imobiliária'
        });
    }
    
    await sendMetaConversion('ViewContent', userData, {
        content_name: contentName,
        content_category: 'Imobiliária'
    });
}

// Função para rastrear cliques no Instagram
export async function trackInstagramClick(userData = {}) {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('trackCustom', 'InstagramClick', {
            content_category: 'Social Media',
            content_name: 'Instagram Profile'
        });
    }
    
    await sendMetaConversion('InstagramClick', userData, {
        content_category: 'Social Media',
        content_name: 'Instagram Profile',
        click_type: 'social_media'
    });
}

// Função para rastrear cliques no WhatsApp
export async function trackWhatsAppClick(userData = {}) {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('trackCustom', 'WhatsAppClick', {
            content_category: 'Contact',
            content_name: 'WhatsApp Contact'
        });
    }
    
    await sendMetaConversion('WhatsAppClick', userData, {
        content_category: 'Contact',
        content_name: 'WhatsApp Contact',
        click_type: 'contact'
    });
}

// Função para rastrear tempo na página (30 segundos)
export async function track30SecondsOnPage(userData = {}) {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('trackCustom', 'TimeOnPage30s', {
            content_category: 'Engagement',
            content_name: '30 Seconds on Page'
        });
    }
    
    await sendMetaConversion('TimeOnPage30s', userData, {
        content_category: 'Engagement',
        content_name: '30 Seconds on Page',
        engagement_type: 'time_on_page',
        duration: 30
    });
}

// Função para rastrear scroll de 50%
export async function track50PercentScroll(userData = {}) {
    console.log('Iniciando track50PercentScroll');
    if (typeof window !== 'undefined' && window.fbq) {
        console.log('Enviando evento para fbq (Pixel)');
        window.fbq('trackCustom', 'Scroll50Percent', {
            content_category: 'Engagement',
            content_name: '50% Page Scroll'
        });
    }
    
    console.log('Enviando evento para Conversion API');
    await sendMetaConversion('Scroll50Percent', userData, {
        content_category: 'Engagement',
        content_name: '50% Page Scroll',
        engagement_type: 'scroll',
        scroll_depth: 50
    });
    console.log('Evento de 50% scroll enviado com sucesso');
}

// Função para rastrear scroll de 90%
export async function track90PercentScroll(userData = {}) {
    console.log('Iniciando track90PercentScroll');
    if (typeof window !== 'undefined' && window.fbq) {
        console.log('Enviando evento para fbq (Pixel)');
        window.fbq('trackCustom', 'Scroll90Percent', {
            content_category: 'Engagement',
            content_name: '90% Page Scroll'
        });
    }
    
    console.log('Enviando evento para Conversion API');
    await sendMetaConversion('Scroll90Percent', userData, {
        content_category: 'Engagement',
        content_name: '90% Page Scroll',
        engagement_type: 'scroll',
        scroll_depth: 90
    });
    console.log('Evento de 90% scroll enviado com sucesso');
}