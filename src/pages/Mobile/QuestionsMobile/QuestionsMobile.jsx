import React from "react";
import "./questionsMobile.css";

const faqsMobile = [
  {
    categoria: "Sobre o sistema",
    slug: "sobre-mobile",
    perguntas: [
      {
        q: "Como o sistema ajuda na gestão de vendas?",
        a: "Através de funis personalizados, automação de contatos, relatórios inteligentes e CRM integrado.",
      },
      {
        q: "O sistema é online?",
        a: "Sim! Totalmente baseado em nuvem.",
      },
      {
        q: "O sistema pode ser usado em projetos novos ou em andamento?",
        a: "Sim! Pode ser utilizado em ambos os tipos de projetos.",
      },
      {
        q: "Posso acompanhar o desempenho da minha equipe de vendas?",
        a: "Sim! Há dashboards e relatórios de performance.",
      },
      {
        q: "A Lote Mobile possui aplicativo?",
        a: "Sim! Totalmente baseado em nuvem.",
      },
    ],
  },
  {
    categoria: "Implementação e Suporte",
    slug: "suporte-mobile",
    perguntas: [
      {
        q: "Vocês oferecem treinamento?",
        a: "Sim, acompanhamos o cliente durante a implantação.",
      },
    ],
  },
  {
    categoria: "Planos",
    slug: "planos-mobile",
    perguntas: [
      {
        q: "Quais os planos disponíveis?",
        a: "Mensal e anual com benefícios escaláveis.",
      },
    ],
  },
  {
    categoria: "Financeiro",
    slug: "financeiro-mobile",
    perguntas: [
      {
        q: "Como funcionam as cobranças?",
        a: "Recorrentes por boleto ou cartão.",
      },
    ],
  },
];

export default function QuestionsMobileOnly() {
  return (
    <section className="faq-section-mobile container py-5">
      <h1 className="text-center mb-4 fw-bold ">
        Perguntas
        <br />
        frequentes
      </h1>

      {/* MENU TABS MOBILE */}
      <ul className="nav nav-pills faq-tabs-mobile d-flex flex-nowrap overflow-auto pb-2">
        {faqsMobile.map((cat, i) => (
          <li className="nav-item me-2" key={cat.slug}>
            <button
              className={`nav-link ${
                i === 0 ? "active" : ""
              } fw-bold px-3 py-1`}
              data-bs-toggle="pill"
              data-bs-target={`#${cat.slug}`}
            >
              {cat.categoria}
            </button>
          </li>
        ))}
      </ul>

      {/* CONTEÚDO */}
      <div className="tab-content mt-2">
        {faqsMobile.map((cat, index) => (
          <div
            className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
            id={cat.slug}
            key={cat.slug}
          >
            <div className="accordion" id={`accordion-${cat.slug} border-0`}>
              {cat.perguntas.map((p, i) => (
                <div className="accordion-item-mobile mb-2 border-0" key={i}>
                  <h2 className="accordion-header ">
                    <button
                      className={`accordion-button accordion-button-mobile ${
                        i !== 0 ? "collapsed" : ""
                      } fw-bold text-start gap-4 px-4`}
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${cat.slug}-${i}`}
                    >
                      {p.q}
                    </button>
                  </h2>

                  <div
                    id={`collapse-${cat.slug}-${i}`}
                    className={`accordion-collapse mt-3 text-start px-3 collapse ${
                      i === 0 ? "show" : ""
                    }`}
                    data-bs-parent={`#accordion-${cat.slug}`}
                  >
                    <div className="accordion-body-mobile">{p.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
