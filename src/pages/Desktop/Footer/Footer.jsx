import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logoLote2 from "../../../assets/images/logoLoteBranco.png";
import { trackInstagramClick } from "../../../services/meta/metaConversion";

export default function Footer() {
  return (
    <footer className="text-light px-3 py-5 d-flex align-items-center"
    style={{backgroundColor: "#01233F", height: "auto"}}
    id="footer">
      <div className="container w-100 h-auto">
        <div className="row gy-4 mb-1 d-flex justify-content-between h-100">
          {/* Coluna 1 - Logo e descrição */}
          <div className="col-md-4 mt-1 d-flex flex-column">
            <div className="mb-4 d-flex align-items-center gap-2">
              <img
                src={logoLote2}
                alt="LoteMobile"
                style={{ height: "80px" }}
              />
            </div>
            <p className="w-75 mb-5 fs-6" style={{ lineHeight: "1.4" }}>
              A Lote Mobile (razão social I.B. SYSTEM Desenvolvimento de Software LTDA,
              CNPJ: 28.833.816/0001-15) é uma empresa especializada em soluções
              tecnológicas para gestão de loteamentos, atuando em todo Brasil.
              <br /><br />
              Não somos loteadora nem incorporadora imobiliária, nem empresa financeira.
              Nosso papel é fornecer plataforma digital e sistemas integrados para
              loteadoras, imobiliárias e gestores de lotes, com foco em automação,
              eficiência e controle.
            </p>

            <div className="d-flex gap-3 mt-3 fs-4">
              <a href="https://www.instagram.com/lotemobile/" className="text-light" onClick={() => trackInstagramClick()}><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-light"><i className="bi bi-x"></i></a>
              <a href="#" className="text-light"><i className="bi bi-facebook"></i></a>
            </div>
          </div>

          {/* Coluna 2 - Links úteis */}
          <div className="col-md-2 w-auto">
            <h6 className="fw-bold fs-3 mb-3">Links Úteis</h6>
            <ul className="list-unstyled fs-6 mt-5 gap-3 d-flex flex-column">
              <li><a href="#" className="text-light text-decoration-none">Início</a></li>
              <li><a href="#" className="text-light text-decoration-none">Funcionalidades</a></li>
              <li><a href="#" className="text-light text-decoration-none">Integrações</a></li>
              <li><a href="#" className="text-light text-decoration-none">FAQ</a></li>
              <li><a href="#" className="text-light text-decoration-none">Depoimentos</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contatos</a></li>
            </ul>
          </div>

          {/* Coluna 3 - Serviços */}
          <div className="col-md-2 w-auto">
            <h6 className="fw-bold mb-3 fs-3">Serviços</h6>
            <ul className="list-unstyled fs-6 mt-5 gap-3 d-flex flex-column">
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
          <div className="col-md-3 w-auto">
            <h6 className="fw-bold mb-3 fs-3">Contatos</h6>
            <ul className="list-unstyled fs-6 mt-5 gap-3 d-flex flex-column">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                Av. Paulo VI, 781<br />Jardim Lima<br />Franca - SP
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
                Seg a Qui: 8h às 18h<br />
                Sex: 8h às 12h
              </li>
            </ul>
          </div>
        </div>

        {/* Linha inferior */}
        <hr className="border-secondary mt-4 mb-4" />
        <div className="d-flex flex-column mt-2 flex-md-row justify-content-between small">
          <p className="mb-0">
            © Copyright 2025 – I.B System LTDA | UI. by A Mais MKT.
          </p>
          <div className="d-flex gap-3">
            <a href="#" className="text-light text-decoration-none">Políticas de Privacidade</a>
            <a href="#" className="text-light text-decoration-none">Termos de Serviço</a>
            <a href="#" className="text-light text-decoration-none">Políticas de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
