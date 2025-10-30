import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./crmMobile.css";
import { FaLinkedinIn, FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

export default function CrmMobile() {
  return (
    <section className="section-4-mobile d-flex align-items-center">
      <div className="container d-flex flex-column align-items-center justify-content-center gap-4">
        {/* Texto principal */}
        <div className="text-center text-light col-12">
          <h2 className="fw-bold fs-1 section4-title-mobile" style={{lineHeight:"1.1"}}>
            <span style={{color:"#00c8ff"}}>Gestão e vendas </span>
            <br></br>lado a lado com 
            um <span style={{color:"#00c8ff"}}><br></br>CRM completo </span>
            <br></br>e conectado.
          </h2>

          <button className="btn btn-outline-info-mobile mt-4 px-4 py-2 rounded-pill d-flex align-items-center justify-content-center gap-2 mx-auto">
            Contrate já <span className="fs-5" style={{ color: "#00c8ff" }}>↗</span>
          </button>
        </div>

        {/* Ícones sociais abaixo do botão */}
        <div className="social-icons-mobile d-flex justify-content-center gap-3 mt-4">
          <a href="#" className="icon-mobile"><FaLinkedinIn /></a>
          <a href="#" className="icon-mobile"><FaInstagram /></a>
          <a href="#" className="icon-mobile"><FaWhatsapp /></a>
          <a href="#" className="icon-mobile"><FaXTwitter /></a>
        </div>
      </div>
    </section>
  );
}
