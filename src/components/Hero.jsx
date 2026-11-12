import { useEffect, useRef, useState } from "react";
import { slides } from "../data/content.js";

const INTERVALO = 6000;

export default function Hero() {
  const sliderRef = useRef(null);
  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);

  const mostrar = (i) => setIndice((i + slides.length) % slides.length);

  // Desplaza el carrusel cuando cambia la diapositiva activa
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollTo({ left: slider.clientWidth * indice, behavior: "smooth" });
  }, [indice]);

  // Avance automático (se reinicia con cada cambio y se pausa con el mouse encima)
  useEffect(() => {
    if (pausado) return;
    const id = setInterval(() => setIndice((i) => (i + 1) % slides.length), INTERVALO);
    return () => clearInterval(id);
  }, [pausado, indice]);

  return (
    <section className="portada" id="inicio" aria-label="Presentación">
      <div
        className="slider"
        ref={sliderRef}
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
      >
        {slides.map((slide, i) => {
          const Titulo = i === 0 ? "h1" : "h2";
          return (
            <article className="slide" key={slide.titulo}>
              <img src={slide.imagen} alt={slide.alt} />
              <div className="texto-slide">
                <p className="etiqueta">{slide.etiqueta}</p>
                <Titulo>{slide.titulo}</Titulo>
                <p>{slide.texto}</p>
                <a className="boton" href={slide.enlace}>
                  {slide.boton}
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <button
        className="slider-control slider-anterior"
        type="button"
        aria-label="Mostrar imagen anterior"
        onClick={() => mostrar(indice - 1)}
      >
        ‹
      </button>
      <button
        className="slider-control slider-siguiente"
        type="button"
        aria-label="Mostrar imagen siguiente"
        onClick={() => mostrar(indice + 1)}
      >
        ›
      </button>

      <div className="slider-nav" aria-label="Elegir imagen de portada">
        {slides.map((slide, i) => (
          <button
            key={slide.titulo}
            type="button"
            aria-label={`Mostrar imagen ${i + 1}`}
            className={i === indice ? "activo" : ""}
            onClick={() => mostrar(i)}
          />
        ))}
      </div>
    </section>
  );
}
