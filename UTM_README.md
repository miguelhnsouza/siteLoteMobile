# Sistema de UTM Tracking

Este projeto inclui um sistema completo de rastreamento UTM (Urchin Tracking Module) integrado com a API de Conversão da Meta.

## Como Funciona

### 1. Captura Automática
Quando um usuário acessa o site com parâmetros UTM na URL, eles são automaticamente capturados e armazenados no localStorage.

**Parâmetros suportados:**
- `utm_source` - Origem do tráfego
- `utm_medium` - Meio de marketing
- `utm_campaign` - Nome da campanha
- `utm_term` - Termo de pesquisa
- `utm_content` - Conteúdo específico
- `gclid` - Google Click ID
- `fbclid` - Facebook Click ID

### 2. Integração com Eventos da Meta
Todos os eventos de conversão enviados para a Meta incluem automaticamente os parâmetros UTM capturados nos `custom_data`.

### 3. Links com UTM
Os links externos (Instagram, WhatsApp, etc.) incluem automaticamente os parâmetros UTM capturados, permitindo rastreamento completo da jornada do usuário.

## Exemplo de Uso

```javascript
import { useUTM } from '../hooks/useUTM';

function MeuComponente() {
  const { utmParams, addUTMToLink, hasUTM } = useUTM();

  return (
    <a href={addUTMToLink("https://exemplo.com")}>
      Link com UTM automático
    </a>
  );
}
```

## Funções Disponíveis

### `captureUTMParameters()`
Captura parâmetros UTM da URL atual e armazena no localStorage.

### `getStoredUTMParameters()`
Retorna os parâmetros UTM armazenados.

### `addUTMToUrl(baseUrl, utmParams)`
Adiciona parâmetros UTM a uma URL.

### `clearUTMParameters()`
Remove os parâmetros UTM armazenados.

### Hook `useUTM()`
Hook React que fornece acesso fácil às funções UTM.

## Benefícios

- **Rastreamento completo**: Sabe exatamente de onde vem cada conversão
- **Atribuição correta**: Parâmetros UTM são preservados na jornada do usuário
- **Integração automática**: Funciona com todos os eventos já implementados
- **Compatibilidade**: Funciona com Google Analytics, Meta Ads, etc.

## Testando

Para testar, acesse o site com parâmetros UTM:
```
https://seusite.com?utm_source=facebook&utm_medium=cpc&utm_campaign=verao2024
```

Os parâmetros serão capturados e incluídos em todos os eventos subsequentes.