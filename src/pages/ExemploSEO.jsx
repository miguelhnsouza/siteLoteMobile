import React from 'react';
import SEOHead from '../components/SEOHead';
import { StructuredData } from '../components/SEOHead';

export default function ExemploSEO() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Exemplo de Página com SEO - Lote Mobile",
    "description": "Esta é uma página de exemplo mostrando como implementar SEO otimizado",
    "url": "https://lotemobile.com.br/exemplo-seo",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Lote Mobile",
      "url": "https://lotemobile.com.br"
    },
    "about": {
      "@type": "Organization",
      "name": "Lote Mobile",
      "description": "Sistema de gestão imobiliária completo"
    }
  };

  return (
    <SEOHead
      title="Exemplo SEO - Lote Mobile | Sistema Imobiliário Completo"
      description="Veja como implementamos SEO avançado no Lote Mobile. Técnicas de otimização para motores de busca, meta tags, structured data e muito mais."
      keywords="SEO, otimização motores busca, meta tags, structured data, Lote Mobile, imobiliária"
      url="https://lotemobile.com.br/exemplo-seo"
    >
      <StructuredData data={structuredData} />

      <div className="container py-5">
        <h1>Exemplo de Página com SEO Otimizado</h1>
        <p>Esta página demonstra como implementar SEO avançado no React.</p>

        <div className="row">
          <div className="col-md-6">
            <h2>Meta Tags Implementadas</h2>
            <ul>
              <li>Title dinâmico</li>
              <li>Meta description</li>
              <li>Open Graph tags</li>
              <li>Twitter Cards</li>
              <li>Structured Data (JSON-LD)</li>
            </ul>
          </div>

          <div className="col-md-6">
            <h2>Benefícios do SEO</h2>
            <ul>
              <li>Melhor ranking no Google</li>
              <li>Mais tráfego orgânico</li>
              <li>Compartilhamento social otimizado</li>
              <li>Melhor experiência do usuário</li>
            </ul>
          </div>
        </div>
      </div>
    </SEOHead>
  );
}