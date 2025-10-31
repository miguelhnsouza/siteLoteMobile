import React, { useState } from "react";
import "./formMobile.css";
import { FaUser, FaEnvelope, FaWhatsapp, FaClock } from "react-icons/fa";
import { trackLead } from "../../../services/meta/metaConversion";

export default function FormMobile() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    horario: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Rastrear lead
    await trackLead('Formulário Mobile', {
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      horario: formData.horario
    });

    // Aqui você pode adicionar lógica adicional, como enviar para um servidor
    alert('Formulário enviado com sucesso!');
  };

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
        <form onSubmit={handleSubmit} className="form-wrapper-mobile">

          <div className="form-field-mobile">
            <FaUser className="icon-mobile me-2" />
            <input 
              type="text" 
              name="nome"
              placeholder="Seu nome completo" 
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field-mobile">
            <FaEnvelope className="icon-mobile me-2" />
            <input 
              type="email" 
              name="email"
              placeholder="Seu melhor email" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field-mobile">
            <FaWhatsapp className="icon-mobile me-2" />
            <input 
              type="tel" 
              name="telefone"
              placeholder="Digite seu WhatsApp" 
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field-mobile mb-4">
            <FaClock className="icon-mobile me-2" />
            <input 
              type="text" 
              name="horario"
              placeholder="Horário de preferência" 
              value={formData.horario}
              onChange={handleChange}
            />
          </div>

        </form>
      </div>

      {/* Botão inferior */}
      <button type="submit" onClick={handleSubmit} className="btn-agende2-mobile w-auto px-4 py-3 rounded-5 fw-bold mt-4 mb-3">
        Fale com um especialista!
      </button>
    </section>
  );
}
