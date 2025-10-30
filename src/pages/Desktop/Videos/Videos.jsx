import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./video.css";

export default function Videos() {
  return (
    <section className="section-videos py-5 bg-white">
      <div className="container h-75 d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5">
        {/* Texto à esquerda */}
        <div className="col-lg-3">
          <h2 className="text-videos-left">
            <span style={{fontFamily: "Grift-Black", color: "#0463df"}}>
              Tudo
              <br /> o que seu loteamento precisa
            </span>{" "}
            em apenas um sistema
          </h2>
          <p className="text-secondary mt-3">
            Tecnologia que simplifica processos, conecta equipes e impulsiona
            resultados no mercado imobiliário.
          </p>
          <button className="btn btn-primary rounded-pill px-5 py-2 mt-3 fw-semibold fs-3">
            Compre agora
          </button>
        </div>

        {/* Cards */}
        <div className="d-flex h-100 align-items-center gap-4 overflow-hidden">
          {/* Card 1 */}
          <div className="card-hover">
            <div className="video-thumb">
              <span className="play-icon">▶</span>
            </div>
            <div>
              <h5 className="fw-thin text-title-cards">
                Mapa interativo no Google Maps
              </h5>
              <p className="small mb-0">
                Visualize seu loteamento em tempo real e com total precisão no Google Maps. O mapa interativo da lote mobile mostra cada lote disponivel, servado ou vendido, tudo integrado ao google maps para uma experiência de venda moderna e transparente.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-hover">
            <div className="video-thumb">
              <span className="play-icon">▶</span>
            </div>
            <div>
              <h5 className="fw-thin text-title-cards">
                CRM Integrado às redes e site
              </h5>
              <p className="small mb-0">
                Centralize todos os leads em um só lugar. Acompanhe conversas do WhatsApp, Facebook e Instagram sem sair do sistema e transforme contatos em vendas com o CRM que conecta sua equipe ao cliente do primeiro atendimento até a assinatura do contrato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
