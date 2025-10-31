import React, { useState } from "react";
import "./form.css";
import { FaUser, FaEnvelope, FaWhatsapp, FaClock } from "react-icons/fa";
import { trackLead } from "../../../services/meta/metaConversion";

export default function Form() {
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
    await trackLead('Formulário Desktop', {
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      horario: formData.horario
    });

    // Aqui você pode adicionar lógica adicional, como enviar para um servidor
    alert('Formulário enviado com sucesso!');
  };

  return (
    <section className="vh-auto p-5 bg-white d-flex align-items-center flex-row" id="formulario">
      <div className="col-md-5 h-100 p-4 d-flex justify-content-center align-items-center">
        <div className="w-auto h-75 text-start d-flex flex-column justify-content-center align-items-center">
          <h1
            className="fw-bold mb-3"
            style={{ color: "#0573FF", fontSize: "3.5rem", lineHeight: "1", fontFamily: "Grift-Black"}}
          >
            Você está
            <br />
            pronto para
            <br />
            <span style={{ color: "#06243c",  fontFamily: "Grift-Black" }}>
            revolucionar a<br />
              gestão do seu
              <br />
            </span>
              loteamento?
          </h1>
          <p className="w-100 text-start m-0">Agende uma reunião de apresentação!</p>
        </div>
      </div>
      <div className="col-md-7 h-100">
        <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
          <div className="w-75 d-flex justify-content-center">
            <button className="btn btn-primary btn-agende rounded-5 px-4 py-2 fs-4 fw-bold">
              Agende uma reunião de apresentação!
            </button>
          </div>
          <div className="form-container"
          style={{width: "75%", height: "50%"}}>
            <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center gap-3"
            style={{width: "90%", height: "75%"}}>
              {/* Nome completo */}
              <div className="d-flex align-items-center border-bottom pb-2">
                <FaUser className="text-primary me-2" />
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome completo"
                  className="form-control border-0 shadow-none"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="d-flex align-items-center border-bottom pb-2">
                <FaEnvelope className="text-primary me-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu melhor email"
                  className="form-control border-0 shadow-none"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* WhatsApp e Horário */}
              <div className="d-flex gap-3">
                <div className="d-flex align-items-center border-bottom pb-2 w-50">
                  <FaWhatsapp className="text-primary me-2" />
                  <input
                    type="tel"
                    name="telefone"
                    placeholder="Digite seu whatsapp"
                    className="form-control border-0 shadow-none"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="d-flex align-items-center border-bottom pb-2 w-50">
                  <FaClock className="text-primary me-2" />
                  <input
                    type="text"
                    name="horario"
                    placeholder="Horário de preferência"
                    className="form-control border-0 shadow-none"
                    value={formData.horario}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="w-75 d-flex justify-content-center">
            <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-agende2 rounded-5 px-4 py-2 fs-5 fw-bold">
              Fale com um especialista!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
