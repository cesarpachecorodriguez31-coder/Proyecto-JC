import { proyectos } from "../data/content.js";

export default function Projects() {
  return (
    <section className="seccion" id="proyectos">
      <div className="titulo-seccion">
        <p className="etiqueta">Ideas que toman forma</p>
        <h2>Proyectos y propiedades</h2>
        <p>Esta sección puede mostrar obras realizadas o inmuebles disponibles.</p>
      </div>

      <div className="rejilla-proyectos">
        {proyectos.map((p) => (
          <article className="proyecto" key={p.titulo}>
            <img src={p.imagen} alt={p.alt} />
            <div className="contenido-proyecto">
              <span className="estado">{p.estado}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
