import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


export default function Comments() {
  // Lista de comentários
  const comments = [
    {
      name: "Riacho Doce Chacreamento",
      role: "Loteamento",
      rating: 5,
      text: "O Lote Mobile revolucionou a gestão do meu empreendimento! A plataforma é completa e oferece todas as ferramentas necessárias para a gestão do meu empreendimento. Recomendo!!!",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLrZTZ2OxcnO7Sx693lkPfghS5ifj2GWi3vA&s",
    },
    {
      name: "Lucas Bahiana",
      role: "Loteador",
      rating: 5,
      text: "As ferramentas do sistema foram pensadas para a atividade de loteamento, tornando nossa operação mais ajustada, o que permitiu unificar os termos do mercado, de contrato e de gestão numa única plataforma.",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Silhueta-png-cinzento-300x284.png",
    },
    {
      name: "Empreendimentos Reuter",
      role: "Empresa",
      rating: 5,
      text: "Agradecemos a parceria extraordinária do Empreendimentos Reuter com a Lote. Percebemos que é inevitável a companhia de parceiros como vocês, que nos ajudam a enfrentar os desafios e dão sentido ao caminho que precisamos trilhar.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQIqCNpkokycIWJXXnI1mjPhLE8izcoMmzQ&s",
    },
    {
      name: "Eder Junior",
      role: "Loteador",
      rating: 5,
      text: "Estou extremamente satisfeito com o sistema de gestão de loteamentos oferecido por esta empresa. A facilidade de uso e a eficiência do software são impressionantes. Ele simplificou completamente nossas operações.",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Silhueta-png-cinzento-300x284.png",
    },
  ];

  return (
    <section
      className="py-5 text-center text-white d-flex align-items-center"
      style={{
        background: "linear-gradient(15deg, #1d1844ff 25%, #2a1d9d, #0956bbff)",
        height: "auto",
      }}
      id="comments"
    >
      <div className="container w-100 h-75">
        <h2 className="fw-bold fs-2 mb-5">
          <span style={{ color: "#00bcd4" }}>O que os nossos clientes</span>{" "}
          falam dos nossos produtos e serviços
        </h2>

        <div className="row g-4 justify-content-center">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch"
            >
              <div
                className="p-4 rounded-4 text-start w-100 h-100"
                style={{ border: "1px solid #00bcd4" }}
              >
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={comment.img}
                    alt={comment.name}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h6 className="mb-0 text-white fw-bold">{comment.name}</h6>
                    <small className="text-secondary">{comment.role}</small>
                  </div>
                </div>

                <div className="mb-2 d-flex gap-1"
                style={{color: "#00bcd4",}}>
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`bi ${
                        i < comment.rating ? "bi-star-fill" : "bi-star"
                      }`}
                    ></i>
                  ))}
                </div>

                <p className="text-light" style={{ fontSize: "0.95rem" }}>
                  {comment.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
