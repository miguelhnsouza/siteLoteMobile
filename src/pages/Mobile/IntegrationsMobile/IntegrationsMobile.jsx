import { useState } from "react";
import "./integrationsMobile.css";
import logoClick from "../../../assets/images/logoClick.png";
import logoItau from "../../../assets/images/logoItau.png";
import logoBradesco from "../../../assets/images/logoBradesco.png";
import logoSicredi from "../../../assets/images/logoSicredi.png";
import logoSicoob from "../../../assets/images/logoSicoob.png";
import logoMaps from "../../../assets/images/logoMaps.png";
import logoBB from "../../../assets/images/logoBb.png";

const items = [
  {
    id: 1,
    icon: logoClick,
    title: "Clicksing",
    text: "Fechamento de contratos de forma simplificada, assinatura digital integrada ao Lote Mobile...",
  },
  {
    id: 2,
    icon: logoMaps,
    title: "Google Maps",
    text: "Visualize loteamentos, rotas GPS e posicionamento geográfico com total precisão...",
  },
  {
    id: 3,
    icon: logoBB,
    title: "Banco do Brasil",
    text: "Integração para repasses, boletos e conciliação automática...",
  },
  {
    id: 4,
    icon: logoSicoob,
    title: "Sicoob Cooperativa",
    text: "Integração financeira com emissão de boletos e controle de inadimplência...",
  },
  {
    id: 5,
    icon: logoSicredi,
    title: "Sicredi Cooperativa",
    text: "Gestão bancária integrada com automação contábil...",
  },
  {
    id: 6,
    icon: logoItau,
    title: "Banco Itaú",
    text: "Conciliação, fluxo bancário e emissão direta no seu painel...",
  },
  {
    id: 7,
    icon: logoBradesco,
    title: "Banco Bradesco",
    text: "Gestão simplificada de recebíveis e transferências...",
  },
];

export default function IntegrationsMobile() {
  const [open, setOpen] = useState(null);

  return (
    <section className="integrations-wrapper-mobile" id="integrations">
      {/* 🔹 Box azul superior */}
      <div className="right-box-mobile d-flex flex-column align-items-center">
        <div className="left-box-mobile px-4 pt-4 pb-5 position-relative">
          <h2 className="fs-1 fw-bold m-0">
            <span>
              Integrações <br />
              que otimizam
            </span>
            <br /> seu loteamento de forma inteligente
          </h2>

          {/* Botão sobreposto */}
          <a href="#formulario" className="text-decoration-none m-0">
            <button className="cta-mobile w-75">Fale com um consultor</button>
          </a>
        </div>

        {/* 🔹 Descrição abaixo */}
        <p className="desc-mobile w-100 mt-5">
          Conecte todos os pontos do seu negócio em um só lugar. Com integrações
          diretas a bancos, redes sociais, automações contábeis e Google Maps, a
          plataforma transforma sua rotina em uma experiência ágil, segura e
          totalmente integrada.
        </p>
        {/* 🔹 Box branco com acordeões */}
        <div className="list-mobile">
          {items.map((item) => (
            <div key={item.id} className="accordion-item-mobile border-0">
              <div
                className="accordion-header-mobile"
                onClick={() => setOpen(open === item.id ? null : item.id)}
              >
                <div className="icon-title-mobile">
                  <img src={item.icon} alt={item.title} className="rounded-2" />
                  <span className="title-text-mobile">{item.title}</span>
                </div>
                <span className="toggle-mobile">
                  {open === item.id ? "×" : "+"}
                </span>
              </div>

              {open === item.id && (
                <p className="accordion-text-mobile">{item.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
