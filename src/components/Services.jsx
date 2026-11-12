import ServiceCard from "./ServiceCard.jsx";
import { servicios } from "../data/content.js";

export default function Services() {
  return (
    <section className="seccion fondo-claro" id="servicios">
      <div className="titulo-seccion">
        <p className="etiqueta">Lo que hacemos</p>
        <h2>Nuestros servicios</h2>
        <p>Encuentra en un solo lugar apoyo para tus proyectos y propiedades.</p>
      </div>

      <div className="rejilla-servicios">
        {servicios.map((servicio) => (
          <ServiceCard key={servicio.titulo} {...servicio} />
        ))}
      </div>
    </section>
  );
}
