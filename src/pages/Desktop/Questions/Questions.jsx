import React from "react";
import "./questions.css";

const faqs = [
  {
    categoria: "Sobre o sistema",
    slug: "sobre",
    perguntas: [
      {
        q: "Como o sistema ajuda na gestão de vendas?",
        a: "Através de funis personalizados, automação de contatos, relatórios inteligentes e CRM integrado.",
      },
      {
        q: "O sistema é online?",
        a: "Sim!",
      },
      {
        q: "O sistema pode ser usado em projetos novos ou em andamento?",
        a: "Sim! Você pode utilizar a Lote Mobile em qualquer momento da trajetória do seu empreendimento",
      },
      {
        q: "Posso acompanhar o desempenho da minha equipe de vendas?",
        a: "Sim! Você consegue acompanhar através módulos e relatórios especiais para ter o controle da sua equipe em suas mãos!",
      },
      {
        q: "A Lote Mobile possui aplicativo?",
        a: "Sim! Temos aplicativo para todos os usuários do sistema!",
      },
    ],
  },
  {
    categoria: "Implementação e Suporte",
    slug: "suporte",
    perguntas: [
      {
        q: "Vocês oferecem treinamento?",
        a: "Sim. Durante a implementação, fornecemos treinamentos completos e suporte dedicado para garantir o melhor aproveitamento do sistema. Sempre que surgirem dúvidas, nossa equipe estará pronta para ajudar.",
      },
    ],
  },
  {
    categoria: "Planos",
    slug: "planos",
    perguntas: [
      {
        q: "Quais os planos disponíveis?",
        a: "Temos diversos planos e disponibilizamos também contratação de módulos especiais! Preenchendo o formulário você verá todos nossas funcionalidades!",
      },
    ],
  },
  {
    categoria: "Financeiros e Cobranças",
    slug: "financeiro",
    perguntas: [
      {
        q: "Como funcionam as cobranças?",
        a: "Você tem um controle total do financeiro do seu empreendimento, desde a negociação até a geração do boleto do seu cliente!",
      },
    ],
  },
];

export default function Questions() {
  return (
    <section className="container py-5 faq-section" id="questions">
      <h1 className="fw-thin mb-4 text-center">Perguntas frequentes</h1>
      <div className="w-75 d-flex flex-column mx-auto">
        {/* MENU TABS */}
        <ul className="nav nav-pills mb-4 d-flex align-items-center justify-content-center" id="faqTabs">
          {faqs.map((cat, index) => (
            <li className="nav-item" key={cat.slug}>
              <button
                className={`nav-link ${index === 0 ? "active" : ""} py-1 px-4 fs-6 fw-bold`}
                data-bs-toggle="pill"
                data-bs-target={`#${cat.slug}`}
              >
                {cat.categoria}
              </button>
            </li>
          ))}
        </ul>

        {/* TABS CONTENT */}
        <div className="tab-content">
          {faqs.map((cat, index) => (
            <div
              className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
              id={cat.slug}
              key={cat.slug}
            >
              <div className="accordion" id={`accordion-${cat.slug}`}>
                {cat.perguntas.map((p, i) => (
                  <div className="accordion-item-question" key={i}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          i !== 0 ? "collapsed" : ""
                        } fw-bold fs-5`}
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${cat.slug}-${i}`}
                      >
                        {p.q}
                      </button>
                    </h2>

                    <div
                      id={`collapse-${cat.slug}-${i}`}
                      className={`accordion-collapse collapse ${
                        i === 0 ? "show" : ""
                      }`}
                      data-bs-parent={`#accordion-${cat.slug}`}
                    >
                      <div className="accordion-body">{p.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
