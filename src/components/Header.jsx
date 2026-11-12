import { useState } from "react";
import { enlaces } from "../data/content.js";
import logo from "../assets/img/logo-empresa.png";

export default function Header() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="encabezado">
      <a className="logo" href="#inicio" aria-label="Ir al inicio">
        <img src={logo} alt="Logo de la empresa" />
        <span>
          Construcciones <strong>&amp; Inmobiliaria</strong>
        </span>
      </a>

      <button
        className="boton-menu"
        type="button"
        aria-expanded={abierto}
        aria-controls="menu-principal"
        onClick={() => setAbierto((v) => !v)}
      >
        {abierto ? "✕" : "☰"} <span>{abierto ? "Cerrar" : "Menú"}</span>
      </button>

      <nav
        className={`barradenavegacion${abierto ? " abierto" : ""}`}
        id="menu-principal"
        aria-label="Navegación principal"
      >
        {enlaces.map((enlace) => (
          <a key={enlace.href} href={enlace.href} onClick={() => setAbierto(false)}>
            {enlace.texto}
          </a>
        ))}
      </nav>
    </header>
  );
}
