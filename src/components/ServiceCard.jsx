import { useState } from "react";

export default function ServiceCard({ icono, titulo, descripcion, detalle }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <article className="tarjeta">
      <span className="icono" aria-hidden="true">{icono}</span>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      {abierto && <p className="detalle-servicio">{detalle}</p>}
      <button
        className="boton boton-detalle"
        type="button"
        aria-expanded={abierto}
        onClick={() => setAbierto((v) => !v)}
      >
        {abierto ? "Mostrar menos" : "Más información"}
      </button>
    </article>
  );
}
