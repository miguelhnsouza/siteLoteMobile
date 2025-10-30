import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import awsLogo from "../../../assets/images/logoAws.png";
import "./awsMobile.css";

export default function AwsMobile() {
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
    <section className="aws-section-mobile py-5 text-center">
      <div className="container">
        <h2 className="aws-title-mobile mb-5">
          <span className="text-highlight-mobile">Tecnologia</span> segura, estável e
          sempre<br />ao seu lado
        </h2>

        <div
          id="awsCarouselMobile"
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
                <div className="aws-slide-mobile d-flex flex-column flex-md-row align-items-center justify-content-center gap-4">
                  <div className="aws-card-mobile d-flex flex-column gap-4 text-center p-4 h-100">
                    <img
                      src={slide.logo}
                      alt="AWS Logo"
                      className="aws-logo-mobile m-0"
                    />
                    <p className="fs-6 m-0">{slide.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botões de navegação */}
          {/* <button
            className="carousel-control-prev custom-arrow-mobile"
            type="button"
            data-bs-target="#awsCarouselMobile"
            data-bs-slide="prev"
          >
            <FaArrowLeft className="arrow-icon-mobile" />
          </button>
          <button
            className="carousel-control-next custom-arrow-mobile"
            type="button"
            data-bs-target="#awsCarouselMobile"
            data-bs-slide="next"
          >
            <FaArrowRight className="arrow-icon-mobile" />
          </button> */}
        </div>
      </div>
    </section>
  );
}
