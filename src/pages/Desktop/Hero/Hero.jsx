import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./banner.css";
import videoBanner1 from "../../../assets/images/videoBanner1.mp4";

export default function Hero() {
  return (
    <section className="banner vh-100 overflow-hidden position-relative" id="hero">
      <div
        id="bannerCarousel"
        className="carousel slide carousel-vertical h-100"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        {/* Indicadores verticais */}
        <div className="vertical-indicators">
          <button
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner w-100 h-100">
          <div className="carousel-item active position-relative w-100 h-100">
            {/* 🎥 Vídeo de fundo */}
            <video
              src={videoBanner1}
              className="video-banner"
              autoPlay
              loop
              muted
              playsInline
            />

            {/* 🌓 Degradê para contraste */}
            <div className="overlay-gradient"></div>

            {/* ✨ Texto sobreposto */}
            <div className="banner-text container text-white text-start">
              <h2 className="fw-bold">
                Feito por loteadores, <br />
                <span className="text-highlight">
                  para facilitar a vida <br />
                  do loteador!
                </span>
              </h2>
              <p className="lead mt-3">
                Gestão simples, visual moderna e tudo na palma da sua mão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
