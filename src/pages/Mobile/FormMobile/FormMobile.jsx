import React, { useState } from "react";
import "./formMobile.css";
import { FaUser, FaEnvelope, FaWhatsapp, FaClock } from "react-icons/fa";
import { trackLead, getStoredUTMParameters } from "../../../services/meta/metaConversion";

export default function FormMobile() {
  const [enviado, setEnviado] = useState(false);

  const maskPhone = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    return value.substring(0, 15);
  };

  const maskTime = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    if (value.length >= 3) {
      value = value.replace(/(\d{2})(\d)/, "$1:$2");
    }
    return value.substring(0, 5);
  };

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    horario: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nome, email, telefone } = formData;

    if (!nome || !telefone) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const utmParams = getStoredUTMParameters();

      await trackLead("Formulário Mobile", formData);

      const mainResponse = await fetch(
        "https://backend.walletlote.app.br/api/landingPage/lead",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            enterprise_id: 148,
            environment_id: 125,
            origin_id: 1,
            name: nome,
            email: email || "",
            phone: telefone.startsWith("55") ? telefone : "55" + telefone,
            utm_source: utmParams.utm_source || null,
            utm_medium: utmParams.utm_medium || null,
            utm_campaign: utmParams.utm_campaign || null,
            utm_term: utmParams.utm_term || null,
            utm_content: utmParams.utm_content || null,
            gclid: utmParams.gclid || null,
            fbclid: utmParams.fbclid || null,
          }),
        }
      );

      const mainData = await mainResponse.json();
      if (mainData.success === false) {
        alert(mainData.message || "Ocorreu um erro no envio principal.");
        return;
      }

      const dataAtual = new Date().toLocaleDateString("pt-BR");
      const dadosSegundoDestino = {
        Data: dataAtual,
        Nome: nome,
        Email: email,
        Telefone: telefone,
        Empresa: "Lote Mobile",
        Origem: "Site lotemobile",
      };

      fetch("https://api.sheetmonkey.io/form/24oJFmzyzwfP1XXoB4dhVH", {
        method: "POST",
        body: new URLSearchParams(dadosSegundoDestino),
      }).catch((err) => console.error("Erro SheetMonkey:", err));

      const dadosTerceiroDestino = {
        Data: dataAtual,
        Nome: nome,
        Email: email,
        Telefone: telefone,
        Empresa: "Lote Mobile",
        Origem: "Site lotemobile",
      };

      fetch("https://hook.us1.make.com/1tda17uo7lnb9c1ficweezvmemk1lmsy", {
        method: "POST",
        body: new URLSearchParams(dadosTerceiroDestino),
      }).catch((err) => console.error("Erro Make:", err));

      setEnviado(true);
      setTimeout(() => setEnviado(false), 3000);

    } catch (error) {
      console.error("Erro geral:", error);
      alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
    }
  };

  return (
    <section
      className="form-section-mobile d-flex flex-column align-items-center justify-content-center"
      id="formulario"
    >
      {/* Título */}
      <div className="form-title-mobile text-left">
        <h1 className="fw-bold">
          Você está <br />
          pronto para <br />
          <span>
            revolucionar a<br />
            gestão do seu
          </span>
          <br />
          loteamento?
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
              onChange={(e) =>
                setFormData({
                  ...formData,
                  telefone: maskPhone(e.target.value),
                })
              }
              required
            />
          </div>
        </form>
      </div>

      {/* Botão inferior (FORA do form) */}
      <button
        type="button"
        onClick={handleSubmit}
        className={`btn-agende2-mobile w-auto px-4 py-3 rounded-5 fw-bold mt-4 mb-3 ${
          enviado ? "btn-success" : ""
        }`}
        disabled={enviado}
      >
        {enviado ? "Enviado!" : "Fale com um especialista!"}
      </button>
    </section>
  );
}
