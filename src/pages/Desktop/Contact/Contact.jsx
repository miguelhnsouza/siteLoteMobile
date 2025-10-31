import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWhatsapp, FaEnvelope, FaLocationDot} from "react-icons/fa6";
import { trackWhatsAppClick } from "../../../services/meta/metaConversion";

export default function Contact() {
  return (
    <section className="text-center"
    id="contact">
      {/* Topo escuro com título */}
      <div
        className="py-5 text-white text-center"
        style={{ backgroundColor: "#01233F" }}
      >
        <h2 className="fw-bold w-auto m-0"
        style={{fontSize: "55px"}}>
          Como você prefere falar com a gente?
        </h2>
      </div>

      {/* Conteúdo principal */}
      <div className="py-5 bg-light">
        <div className="container w-75 d-flex flex-column align-items-center gap-4">
          <div className="row w-100 justify-content-center text-start text-dark mb-3 ">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/551699637972" 
              target="_blank" 
              className="col-12 col-md-4 d-flex flex-column align-items-center text-center mb-4 mb-md-0 text-decoration-none text-dark"
              onClick={() => trackWhatsAppClick()}
            >
              <FaWhatsapp size={36} color="#007bff" className="mb-2" />
              <h5 className="fw-bold">WhatsApp</h5>
              <small className="text-secondary mb-1">
                Precisa de uma ajuda agora?
              </small>
              <p className="fw-semibold mb-0">(16) 9.9963-7972</p>
            </a>

            {/* Email */}
            <div className="col-12 col-md-4 d-flex flex-column align-items-center text-center mb-4 mb-md-0">
              <Mail size={36} color="#007bff" className="mb-2" />
              <h5 className="fw-bold">Email</h5>
              <small className="text-secondary mb-1">
                Tem alguma dúvida?
              </small>
              <p className="fw-semibold mb-0">vendas@ibsystem.com.br</p>
            </div>

            {/* Local */}
            <div className="col-12 col-md-4 d-flex flex-column align-items-center text-center">
              <MapPin size={36} color="#007bff" className="mb-2" />
              <h5 className="fw-bold">Local</h5>
              <small className="text-secondary mb-1">Prefere nos visitar?</small>
              <p className="fw-semibold mb-0">
                Av. Paulo VI, 781 Jardim Lima<br />
                Franca - SP 14403-138
              </p>
            </div>
          </div>

          {/* Botão de ação */}
          <div className="d-flex justify-content-center">
            <a
              href="#formulario"
              className="btn btn-primary btn-agende-contact px-4 py-2 rounded-pill fw-semibold fs-4"
              style={{
                
              }}
            >
              Agende uma <span className="fw-bold">reunião com um especialista</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
