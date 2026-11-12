export default function About() {
  return (
    <section className="seccion nosotros" id="nosotros">
      <div className="texto-nosotros">
        <p className="etiqueta">Quiénes somos</p>
        <h2>Te acompañamos desde la idea hasta el resultado</h2>
        <p>
          Somos una empresa enfocada en ofrecer soluciones para proyectos de construcción y
          necesidades inmobiliarias. Trabajamos con responsabilidad, comunicación clara y atención
          a los detalles.
        </p>
        <p>
          Nuestro objetivo es ayudarte a encontrar, mejorar o construir un espacio que se adapte a
          tus necesidades.
        </p>
        <a className="boton boton-oscuro" href="#contacto">
          Hablemos de tu proyecto
        </a>
      </div>
      <div className="caja-destacada">
        <span className="icono-grande" aria-hidden="true">⌂</span>
        <h3>Tu proyecto, nuestra prioridad</h3>
        <p>Atención personalizada, soluciones prácticas y acompañamiento durante el proceso.</p>
      </div>
    </section>
  );
}
