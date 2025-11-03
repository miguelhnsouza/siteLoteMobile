import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarMobile.css";
import logoLote from "../../../assets/images/logoLote.png";

export default function NavbarMobile() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""} py-3 px-4`}>
      <nav className="navbar navbar-expand-lg navbar-light container">

        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logoLote} alt="Lotemobile" height="45" className="me-2" />
        </a>

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
              <a className="nav-link" href="#videos">
                Funcionalidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#integrations">
                Integrações
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aws">
                Tecnologia
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#questions">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#comments">
                Depoimentos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contatos
              </a>
            </li>
          </ul>
        </div>

        {/* BOTÕES */}
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
