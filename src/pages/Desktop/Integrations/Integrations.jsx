import { useState } from "react";
import "./integrations.css";
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
    text: "Visualize loteamentos, rotas GPS, posicionamento geográfico e informações do terreno...",
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

export default function Integrations() {
  const [open, setOpen] = useState(null);

  return (
    <section className="integrations-wrapper"
    id="integrations">
      <div className="section-integrations row align-items-center">
        <div className="col-md-5 d-flex flex-column align-items-end">
          <div className="left-box">
            <h2 className="">
              <span>Integrações que otimizam</span> seu loteamento de forma
              inteligente
            </h2>
            <a href="#formulario" className="text-decoration-none m-0">
              <button className="cta fs-4">Fale com um consultor</button>
            </a>
          </div>

          <p className="desc">
            Conecte todos os pontos do seu negócio em um só lugar. Com
            integrações diretas a bancos, redes sociais, automações contábeis e
            Google Maps, nossa plataforma transforma sua torina em uma
            experiencia agil, segura e totalmente integrada.
          </p>
        </div>

        <div className="col-md-6 h-100">
          <div
            className="p-5 rounded-5 border border-2 border-primary d-flex align-items-center justify-content-end"
            style={{ width: "75%", height: "85%" }}
          >
            <div
              className="right-box pr-5"
              style={{ width: "80%", height: "80%" }}
            >
              <div className="list">
                {items.map((item) => (
                  <div key={item.id} className="accordion-item">
                    <div
                      className="accordion-header"
                      onClick={() => setOpen(open === item.id ? null : item.id)}
                    >
                      <div className="icon-title">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="rounded-2"
                        />
                        <span className="fs-3">{item.title}</span>
                      </div>
                      <span className="d-flex align-items-center">
                        {open === item.id ? "×" : "+"}
                      </span>
                    </div>

                    {open === item.id && (
                      <p className="accordion-text fs-6">{item.text}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
