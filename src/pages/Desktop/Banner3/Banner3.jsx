import React from "react";
import videoBanner3 from "../../../assets/images/Banner.3.mp4";
import "./banner3.css";

export default function Banner3() {
  return (
    <section className="banner3 position-relative overflow-hidden text-white">
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      >
        <source src={videoBanner3} type="video/mp4" />
      </video>

      {/* Overlay escuro */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

      {/* Conteúdo */}
      <div className="container position-relative z-1 d-flex align-items-center" style={{ minHeight: "100vh" }}>
        <div className="row w-100 align-items-center">
          {/* Coluna do texto */}
          <div className="col-md-6">
            <h1 className="fw-semibold display-5 mb-0">
              Conecte seu <br />
              loteamento ao <br />
              <span className="fw-bold"
              style={{color: "#00bcd4"}}>futuro digital</span>
            </h1>
          </div>

          {/* Coluna do botão */}
          <div className="col-md-6 d-flex justify-content-md-end justify-content-center mt-4 mt-md-0">
            <a
              href="#"
              className="d-inline-flex align-items-center gap-2 px-5 py-3 rounded-5 border border-info text-white text-decoration-none hover-glow"
              style={{borderColor: "#00bcd4"}}
            >
              <div className="button-banner3 text-start fw-thin">
                <strong>Clique aqui</strong>
                <br />
                <span className="text-white-50">
                  e leve nossa<br />solução para<br />o seu dia a dia
                </span>
              </div>
              <i className="bi bi-arrow-up-right fs-5"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
