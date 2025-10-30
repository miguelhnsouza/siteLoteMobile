import React from "react";
import "./formMobile.css";
import { FaUser, FaEnvelope, FaWhatsapp, FaClock } from "react-icons/fa";

export default function FormMobile() {
  return (
    <section className="form-section-mobile d-flex flex-column align-items-center justify-content-center"
    id="formulario">
      {/* Título */}
      <div className="form-title-mobile text-left">
        <h1 className="fw-bold">
          Você está <br />
          pronto para <br />
          <span>revolucionar a<br />gestão do seu</span>
          <br />loteamento?
        </h1>
      </div>

      {/* Botão topo */}
      <button className="btn-agende-mobile rounded-5 fw-bold p-3 py-2 mt-0">
        Agende uma reunião de apresentação!
      </button>

      {/* Formulário */}
      <div className="form-container-mobile mt-4 py-5 px-4">
        <form className="form-wrapper-mobile">

          <div className="form-field-mobile">
            <FaUser className="icon-mobile me-2" />
            <input type="text" placeholder="Seu nome completo" />
          </div>

          <div className="form-field-mobile">
            <FaEnvelope className="icon-mobile me-2" />
            <input type="email" placeholder="Seu melhor email" />
          </div>

          <div className="form-field-mobile">
            <FaWhatsapp className="icon-mobile me-2" />
            <input type="tel" placeholder="Digite seu WhatsApp" />
          </div>

          <div className="form-field-mobile mb-4">
            <FaClock className="icon-mobile me-2" />
            <input type="text" placeholder="Horário de preferência" />
          </div>

        </form>
      </div>

      {/* Botão inferior */}
      <button className="btn-agende2-mobile w-auto px-4 py-3 rounded-5 fw-bold mt-4 mb-3">
        Fale com um especialista!
      </button>
    </section>
  );
}
