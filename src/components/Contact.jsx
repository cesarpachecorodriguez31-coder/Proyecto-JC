import { useState } from "react";
import { opcionesServicio } from "../data/content.js";

const VACIO = { nombre: "", correo: "", servicio: "", mensaje: "" };

export default function Contact() {
  const [datos, setDatos] = useState(VACIO);
  const [estado, setEstado] = useState(null); // { tipo: "error" | "exito", texto }

  const cambiar = (e) => setDatos({ ...datos, [e.target.name]: e.target.value });

  const enviar = (e) => {
    e.preventDefault();
    const nombre = datos.nombre.trim();

    if (!nombre || !datos.correo.trim() || !datos.servicio || !datos.mensaje.trim()) {
      setEstado({
        tipo: "error",
        texto: "Por favor, completa todos los campos antes de continuar.",
      });
      return;
    }

    setEstado({
      tipo: "exito",
      texto: `¡Gracias, ${nombre}! Los datos se revisaron correctamente. Esta es una demostración: todavía no se envía un correo real.`,
    });
    setDatos(VACIO);
  };

  return (
    <section className="seccion contacto" id="contacto">
      <div className="texto-contacto">
        <p className="etiqueta">Hablemos</p>
        <h2>Cuéntanos qué necesitas</h2>
        <p>
          ¿Tienes un proyecto de construcción o buscas una propiedad? Escríbenos para conversar
          sobre las opciones.
        </p>
        <p><strong>Correo:</strong> contacto@tuempresa.com</p>
        <p><strong>Teléfono:</strong> +57 300 000 0000</p>
        <p className="nota">Recuerda reemplazar estos datos por los datos reales de tu empresa.</p>
      </div>

      <form className="formulario" onSubmit={enviar}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre"
               value={datos.nombre} onChange={cambiar} required />

        <label htmlFor="correo">Correo electrónico</label>
        <input type="email" id="correo" name="correo" placeholder="nombre@correo.com"
               value={datos.correo} onChange={cambiar} required />

        <label htmlFor="servicio">Servicio de interés</label>
        <select id="servicio" name="servicio" value={datos.servicio} onChange={cambiar} required>
          <option value="">Selecciona una opción</option>
          {opcionesServicio.map((op) => (
            <option key={op}>{op}</option>
          ))}
        </select>

        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" rows="4" placeholder="Cuéntanos brevemente tu idea"
                  value={datos.mensaje} onChange={cambiar} required />

        <button className="boton" type="submit">Enviar consulta</button>
        <p
          className={`mensaje-formulario${estado ? " " + estado.tipo : ""}`}
          role="status"
          aria-live="polite"
        >
          {estado?.texto}
        </p>
      </form>
    </section>
  );
}
