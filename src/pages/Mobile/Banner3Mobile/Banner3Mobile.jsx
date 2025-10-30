import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./banner3Mobile.css";
import videoBanner3 from "../../../assets/images/Banner.3.mp4"
import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

export default function Banner3Mobile() {
  return (
    <section className="section-4-mobile d-flex align-items-center">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src={videoBanner3} type="video/mp4" />
      </video>

      <div className="container d-flex flex-column align-items-center justify-content-center gap-4">
        
        <div className="text-center text-light col-12">
          <h2 className="fw-bold section4-title-mobile">
            Conecte seu
            <br />
            loteamento ao
            <br />
            <span style={{ color: "#00c8ff" }}>futuro digital</span>
          </h2>

          <button className="btn btn-outline-info-mobile mt-3 px-4 py-2 rounded-5">
            Leve nossa solução
          </button>
        </div>

      </div>
    </section>
  );
}
