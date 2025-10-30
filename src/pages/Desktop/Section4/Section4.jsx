import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Section4.css";
import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Section4() {
  return (
    <section className="section-4 d-flex align-items-center" id="crm">
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between gap-5">
        {/* Texto à esquerda */}
        <div className="text-left text-light col-lg-5">
          <h2 className="fw-bold section4-title">
            <span className="text-info">Gestão e vendas</span>
            <br />
            lado a lado com
            <br />
            um <span className="text-info">CRM completo</span>
            <br />e conectado.
          </h2>
          <a href="#formulario" className="text-decoration-none m-0">
            <button className="btn btn-outline-info mt-4 px-4 py-2 rounded-pill d-flex align-items-center gap-2">
              Contrate já{" "}
              <span className="fs-5" style={{ color: "#00c8ff" }}>
                ↗
              </span>
            </button>
          </a>
        </div>

        {/* Ícones sociais */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/company/lotemobileoficial/"
            target="_blank"
            className="icon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/lotemobile/"
            className="icon"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/LoteMobile"
            className="icon"
            target="_blank"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.youtube.com/@lotemobile"
            target="_blank"
            className="icon"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </section>
  );
}
