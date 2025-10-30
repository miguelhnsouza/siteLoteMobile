import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import awsLogo from "../../../assets/images/logoAws.png";
import "./aws.css";

export default function Aws() {
  const slides = [
    {
      logo: awsLogo,
      text: "Seus mapas e sistemas hospedados na Amazon Web Services, com velocidade, estabilidade e proteção de dados em nuvem.",
    },
    {
      logo: awsLogo,
      text: "Alta disponibilidade e escalabilidade garantida pela infraestrutura global da AWS.",
    },
    {
      logo: awsLogo,
      text: "Proteção avançada e backup automático de dados na nuvem Amazon.",
    },
  ];

  return (
    <section className="aws-section py-5 text-center" id="aws">
      <div className="container">
        <h2 className="aws-title mb-5">
          <span className="highlight">Tecnologia</span> segura, estável <br /> e
          sempre ao seu lado
        </h2>

        <div
          id="awsCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="aws-slide d-flex flex-column flex-md-row align-items-center justify-content-center gap-4">
                  <div className="aws-card text-center p-4 h-100">
                    <img
                      src={slide.logo}
                      alt="AWS Logo"
                      className="aws-logo m-0"
                    />
                  </div>
                  <div className="aws-info text-start p-4 h-100">
                    <p>{slide.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botões de navegação */}
          <button
            className="carousel-control-prev custom-arrow"
            type="button"
            data-bs-target="#awsCarousel"
            data-bs-slide="prev"
          >
            <FaArrowLeft className="arrow-icon" />
          </button>
          <button
            className="carousel-control-next custom-arrow"
            type="button"
            data-bs-target="#awsCarousel"
            data-bs-slide="next"
          >
            <FaArrowRight className="arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
