import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./bannerMobile.css";
import videoBanner1 from "../../../assets/images/videoBanner1.mp4";
import logoOutlineLote from "../../../assets/images/outline.svg";

export default function HeroMobile() {
  return (
    <section className="banner-mobile position-relative vh-100 overflow-hidden">
      <div
        id="bannerCarouselMobile"
        className="carousel slide h-100"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        {/* Indicadores verticais */}
        <div className="carousel-indicators-mobile d-flex flex-column align-items-end me-2">
          <button
            type="button"
            data-bs-target="#bannerCarouselMobile"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#bannerCarouselMobile"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#bannerCarouselMobile"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner h-100">
          <div className="carousel-item active h-100 position-relative">
            {/* 🎥 Vídeo de fundo */}
            <video
              src={videoBanner1}
              className="video-banner-mobile"
              autoPlay
              loop
              muted
              playsInline
            />

            {/* 🌓 Gradiente de contraste */}
            <div className="overlay-gradient-mobile"></div>

            {/* ✨ Texto sobreposto */}
            <div className="banner-text-mobile">
              <h2 className="fw-bold mb-2"
              style={{lineHeight: 1.1, fontSize: '35px'}}>
                Feito por loteadores, <br />
                <span className="text-highlight-mobile">para facilitar a vida</span>
                <br />
                do loteador!
              </h2>
            </div>

            {/* ✨ img sobreposta */}
            <div className="banner-img-mobile">
              <img src={logoOutlineLote} alt="Banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
