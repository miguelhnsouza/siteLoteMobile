import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styleNavbar.css";
import logoLote from "../../../assets/images/logoLote.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""} py-3`}>
      <nav className="navbar navbar-expand-lg navbar-light container">
        {/* LOGO */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logoLote} alt="Lotemobile" height="45" className="me-2" />
        </a>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-lg-3 text-center">
            <li className="nav-item">
              <a className="nav-link fw-semibold active" href="#">
                Início
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#funcionalidades">
                Funcionalidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#integracoes">
                Integrações
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tecnologia">
                Tecnologia
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#depoimentos">
                Depoimentos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contatos">
                Contatos
              </a>
            </li>
          </ul>
        </div>

        {/* BOTÕES À DIREITA */}
        <div className="d-none d-lg-flex align-items-center ms-3 gap-2">
          <a href="#" className="btn btn-primary px-4 py-1 rounded-pill">
            Login
          </a>
          <a href="#" className="btn btn-dark px-4 py-1 rounded-pill">
            Compre
          </a>
        </div>
      </nav>
    </header>
  );
}
