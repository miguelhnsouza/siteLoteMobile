import React, { useState } from "react";
import "./form.css";
import { FaUser, FaEnvelope, FaWhatsapp, FaClock } from "react-icons/fa";
import { trackLead } from "../../../services/meta/metaConversion";

export default function Form() {
  const [enviado, setEnviado] = useState(false);

  // Máscara de telefone (WhatsApp)
  const maskPhone = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, ""); // remove tudo que não é número
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    return value.substring(0, 15); // limita o tamanho
  };

  // Máscara de horário (HH:MM)
  const maskTime = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, ""); // só números
    if (value.length >= 3) {
      value = value.replace(/(\d{2})(\d)/, "$1:$2");
    }
    return value.substring(0, 5); // limita a 5 caracteres
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
      // --- 1️⃣ Meta Pixel (conversão)
      await trackLead("Formulário Desktop", formData);

      // --- 2️⃣ API principal (Wallet Lote)
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
          }),
        }
      );

      const mainData = await mainResponse.json();
      if (mainData.success === false) {
        alert(mainData.message || "Ocorreu um erro no envio principal.");
        return;
      }

      // --- 3️⃣ Envio paralelo: SheetMonkey
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

      // --- 4️⃣ Envio paralelo: Make (Integromat)
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

      // window.location.href = "https://lotemobile.com.br/typ.php";
    } catch (error) {
      console.error("Erro geral:", error);
      alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
    }
  };

  return (
    <section
      className="vh-auto p-5 bg-white d-flex align-items-center flex-row"
      id="formulario"
    >
      <div className="col-md-5 h-100 p-4 d-flex justify-content-center align-items-center">
        <div className="w-auto h-75 text-start d-flex flex-column justify-content-center align-items-center">
          <h1
            className="fw-bold mb-3"
            style={{
              color: "#0573FF",
              fontSize: "3.5rem",
              lineHeight: "1",
              fontFamily: "Grift-Black",
            }}
          >
            Você está
            <br />
            pronto para
            <br />
            <span style={{ color: "#06243c", fontFamily: "Grift-Black" }}>
              revolucionar a
              <br />
              gestão do seu
              <br />
            </span>
            loteamento?
          </h1>
          <p className="w-100 text-start m-0">
            Agende uma reunião de apresentação!
          </p>
        </div>
      </div>

      <div className="col-md-7 h-100">
        <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
          <div className="w-75 d-flex justify-content-center">
            <button
              className="btn btn-primary btn-agende rounded-5 px-4 py-2 fs-4 fw-bold"
              type="button"
            >
              Agende uma reunião de apresentação!
            </button>
          </div>

          <div
            className="form-container"
            style={{ width: "75%", height: "50%" }}
          >
            <form
              onSubmit={handleSubmit}
              className="d-flex flex-column justify-content-center gap-3"
              style={{ width: "90%", height: "75%" }}
            >
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

              <div className="d-flex gap-3">
                <div className="d-flex align-items-center border-bottom pb-2 w-50">
                  <FaWhatsapp className="text-primary me-2" />
                  <input
                    type="tel"
                    name="telefone"
                    placeholder="Digite seu WhatsApp"
                    className="form-control border-0 shadow-none"
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
              </div>
            </form>
          </div>

          {/* 🔹 Botão de envio permanece fora do form, como antes */}
          <div className="w-75 d-flex justify-content-center">
            <button
              type="button"
              onClick={handleSubmit}
              className={`btn rounded-5 px-4 py-2 fs-5 fw-bold ${
                enviado ? "btn-success" : "btn-primary"
              } btn-agende2`}
              disabled={enviado}
            >
              {enviado ? "Enviado!" : "Fale com um especialista!"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
