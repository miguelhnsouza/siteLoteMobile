import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./footerMobile.css";
import logoLote2 from "../../../assets/images/logoLoteBranco.png";

export default function FooterMobile() {
  return (
    <footer
      className="text-light px-3 py-5 d-flex align-items-center justify-content-between w-100"
      style={{ backgroundColor: "#01233F", height: "auto" }}
    >
      <div className="container w-100 h-auto d-flex flex-column align-items-center justify-content-between">
        <div className="row gy-4 mb-1 d-flex justify-content-between w-100 h-100">
          {/* Coluna 1 - Logo e descrição */}
          <div className="col-md-4 mt-1 d-flex flex-column">
            <div className="mb-4 w-100 d-flex align-items-center gap-2">
              <img
                src={logoLote2}
                alt="LoteMobile"
                style={{ maxHeight: "50px" }}
              />
            </div>
            <p
              className="w-100 mb-0"
              style={{
                fontSize: ".75rem",
                lineHeight: "1.4",
                fontWeight: 400,
                color: "#767185ff",
              }}
            >
              A Lote Mobile (razão social I.B. SYSTEM Desenvolvimento de
              Software LTDA, CNPJ: 28.833.816/0001-15) é uma empresa
              especializada em soluções tecnológicas para gestão de loteamentos,
              atuando em todo Brasil.
            </p>
          </div>

          {/* Coluna 2 - Links úteis */}
          <div className="col-md-6 w-auto">
            <h6 className="fw-bold fs-6 mb-2">Links Úteis</h6>
            <ul
              className="list-unstyled mt-1 gap-1 d-flex flex-column"
              style={{ fontSize: "13px" }}
            >
              <li>
                <a
                  href="#header"
                  className="text-decoration-none"
                  style={{ color: "#767185ff" }}
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#videos"
                  className="text-decoration-none"
                  style={{ color: "#767185ff" }}
                >
                  Funcionalidades
                </a>
              </li>
              <li>
                <a
                  href="#integrations"
                  className="text-decoration-none"
                  style={{ color: "#767185ff" }}
                >
                  Integrações
                </a>
              </li>
              <li>
                <a
                  href="#questions"
                  className="text-decoration-none"
                  style={{ color: "#767185ff" }}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#comments"
                  className="text-decoration-none"
                  style={{ color: "#767185ff" }}
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-decoration-none"
                  style={{ color: "#767185ff" }}
                >
                  Contatos
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Serviços */}
          <div className="col-md-6 w-auto text-end">
            <h6 className="fw-bold mb-2 fs-6">Serviços</h6>
            <ul
              className="list-unstyled mt-1 gap-1 d-flex flex-column"
              style={{ fontSize: "13px", color: "#767185ff" }}
            >
              <li>Mapa Interativo</li>
              <li>Google Maps</li>
              <li>CRM Integrado</li>
              <li>Simulador de Vendas</li>
              <li>Automação de Cobranças</li>
              <li>Inteligência Artificial</li>
              <li>Aplicativo Lote Mobile</li>
            </ul>
          </div>

          {/* Coluna 4 - Contatos */}
          <div className="col-md-2 mt-2 w-auto">
            <h6 className="fw-bold mb-3 fs-6">Contatos</h6>
            <ul
              className="list-unstyled mt-1 gap-1 d-flex flex-column"
              style={{ fontSize: "13px", color: "#767185ff" }}
            >
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                Av. Paulo VI, 781
                <br />
                Jardim Lima
                <br />
                Franca - SP
              </li>
              <li className="mb-2">
                <i className="bi bi-whatsapp me-2"></i>
                (16) 9.9963-7972
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                contato@ib3system.com.br
              </li>
              <li>
                <i className="bi bi-clock me-2"></i>
                Seg a Qui: 8h às 18h
                <br />
                Sex: 8h às 12h
              </li>
            </ul>
          </div>
        <div className="col-md-2 w-auto d-flex flex-column justify-content-center gap-3 mt-3 fs-4">
          <a href="https://www.instagram.com/lotemobile/" className="text-light">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/lotemobileoficial/" className="text-light">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://www.youtube.com/@lotemobile" className="text-light">
            <i className="bi bi-youtube"></i>
          </a>
          <a href="https://www.facebook.com/LoteMobile" className="text-light">
            <i className="bi bi-facebook"></i>
          </a>
        </div>
        </div>


        {/* Linha inferior */}
        <hr className="border-secondary mt-3 mb-4" />
        <div className="d-flex flex-column mt-2 flex-md-row justify-content-center align-items-center fs-6" style={{color: "#767185ff" }}>
          <p className="mb-2" style={{fontSize: "11px" }}>
            © Copyright 2025 – I.B System LTDA | UI. by A Mais MKT.
          </p>
          <div className="d-flex gap-3" style={{fontSize: "10px" }}>
            <a href="#" className="text-decoration-none">
              Políticas de Privacidade
            </a>
            <a href="#" className="text-decoration-none">
              Termos de Serviço
            </a>
            <a href="#" className="text-decoration-none">
              Políticas de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
