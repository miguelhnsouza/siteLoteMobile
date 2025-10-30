import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./videoMobile.css";

export default function VideosMobile() {
  return (
    <section className="section-videos-mobile py-5 bg-white">
      <div className="container d-flex flex-column align-items-center justify-content-center gap-4">
        {/* Texto superior */}
        <div className="text-center px-3">
          <h2 className="text-videos-left-mobile mb-3"
          style={{ fontSize: "35px", lineHeight: "1" }}>
            <span style={{ fontFamily: "Grift-Black", color: "#0463df"}}>
              Tudo
              o que seu loteamento precisa
            </span>{" "}
            em apenas um sistema
          </h2>
          <p className="text-secondary mt-2 mb-0">
            Tecnologia que simplifica processos, conecta equipes e impulsiona
            resultados no mercado imobiliário.
          </p>
        </div>

        {/* Cards (empilhados verticalmente) */}
        <div className="d-flex flex-column align-items-center gap-4 mt-4 w-100 px-3">
          {/* Card 1 */}
          <div className="card-hover-mobile w-100">
            <div className="video-thumb-mobile">
              <span className="play-icon-mobile">▶</span>
            </div>
            <div>
              <h5 className="fw-bold text-title-cards-mobile">
                Mapa interativo no Google Maps
              </h5>
              <p className="small mb-0">
                Visualize seu loteamento em tempo real e com total precisão no
                Google Maps. O mapa interativo mostra cada lote disponível,
                reservado ou vendido, tudo integrado para uma experiência de
                venda moderna e transparente.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-hover-mobile2 w-100">
            <div className="video-thumb-mobile">
              <span className="play-icon-mobile">▶</span>
            </div>
            <div>
              <h5 className="fw-bold text-title-cards-mobile">
                CRM Integrado às redes e site
              </h5>
              <p className="small mb-0">
                Centralize todos os leads em um só lugar. Acompanhe conversas do
                WhatsApp, Facebook e Instagram sem sair do sistema e transforme
                contatos em vendas com o CRM que conecta sua equipe ao cliente
                do primeiro atendimento até a assinatura do contrato.
              </p>
            </div>
          </div>

          <button className="btn btn-primary rounded-pill px-4 py-2 mt-3 fw-semibold fs-5">
            Compre agora
          </button>
        </div>
      </div>
    </section>
  );
}
