import { useSEO } from '../hooks/useSEO';

export default function SEOHead({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  children
}) {
  useSEO({
    title: title || 'Lote Mobile - Sistema de Gestão para Loteamentos',
    description: description || 'Revolucione a gestão do seu loteamento com o Lote Mobile. Sistema completo para imobiliárias com CRM, marketing digital e gestão financeira integrada.',
    keywords: keywords || 'loteamento, imobiliária, CRM, gestão imobiliária, sistema loteamento, marketing digital imobiliário, gestão financeira imóveis',
    image: image || 'https://lotemobile.com.br/src/assets/images/lote_og_image.png',
    url: url || window.location.href,
    type
  });

  return <>{children}</>;
}

export function StructuredData({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}