import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWhatsapp, FaEnvelope, FaLocationDot} from "react-icons/fa6";

export default function ContactMobile() {
  return (
    <section className="text-center">
      {/* Topo escuro com título */}
      <div
        className="py-5 text-white text-center"
        style={{ backgroundColor: "#01233F" }}
      >
        <h2 className="fw-bold w-auto m-0"
        style={{fontSize: "30px"}}>
          Como você prefere falar com a gente?
        </h2>
      </div>

      {/* Conteúdo principal */}
      <div className="py-5 bg-light">
        <div className="container w-75 d-flex flex-column align-items-center gap-4">
          <div className="row w-100 justify-content-center text-start text-dark mb-3 ">
            {/* WhatsApp */}
            <div className="col-12 col-md-4 d-flex flex-column align-items-start mb-4 mb-md-0">
              <FaWhatsapp size={20} color="#007bff" className="mb-2" />
              <h6 className="fw-bold mb-0">WhatsApp</h6>
              <small className="fs-6 text-secondary mb-1">
                Precisa de uma ajuda agora?
              </small>
              <p className="fw-semibold mb-0">(16) 9.9963-7972</p>
            </div>

            {/* Email */}
            <div className="col-12 col-md-4 d-flex flex-column align-items-end text-center mb-4 mb-md-0">
              <Mail size={20} color="#007bff" className="mb-2" />
              <h6 className="fw-bold mb-0">Email</h6>
              <small className="text-secondary mb-1 fs-6">
                Tem alguma dúvida?
              </small>
              <p className="fw-semibold mb-0">contato@ib3system.com.br</p>
            </div>

            {/* Local */}
            <div className="col-12 col-md-4 d-flex flex-column align-items-start">
              <MapPin size={20} color="#007bff" className="mb-2" />
              <h6 className="fw-bold mb-0">Local</h6>
              <small className="text-secondary mb-1 fs-6">Prefere nos visitar?</small>
              <p className="fw-semibold mb-0">
                Av. Paulo VI, 781 Jardim Lima<br />
                Franca - SP 14403-138
              </p>
            </div>
          </div>

          {/* Botão de ação */}
          <div className="d-flex justify-content-center">
            <a
              href="#"
              className="btn btn-primary btn-agende-contact px-4 py-2 rounded-pill fw-semibold fs-"
              style={{
                
              }}
            >
              Fale com um especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
