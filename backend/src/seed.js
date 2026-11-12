// Carga los servicios y proyectos iniciales (los mismos del frontend). Es idempotente.
import mongoose from "mongoose";
import { conectarDB } from "./config/db.js";
import Servicio from "./models/Servicio.js";
import Proyecto from "./models/Proyecto.js";

const servicios = [
  ["🏗️", "Construcción", "Apoyo en la ejecución de obras nuevas, desde la planeación hasta los acabados.", "Podemos ayudarte a organizar las etapas iniciales de una obra y revisar las necesidades de tu proyecto."],
  ["🏠", "Compra y venta", "Asesoría para buscar, ofrecer o vender casas, apartamentos y otros inmuebles.", "Podemos orientarte para definir qué tipo de inmueble buscas o qué información preparar para ofrecerlo."],
  ["🛠️", "Remodelación", "Mejoras para renovar espacios, aprovechar áreas y darles una nueva apariencia.", "Revisamos contigo los cambios que deseas hacer para mejorar la comodidad y el uso de tus espacios."],
  ["📐", "Diseño y asesoría", "Orientación inicial para organizar ideas, definir necesidades y planear tu proyecto.", "Te ayudamos a ordenar tus ideas y establecer prioridades antes de comenzar."],
  ["🔧", "Mantenimiento", "Soluciones para conservar espacios residenciales o comerciales en buenas condiciones.", "Puedes consultar opciones para conservar en buen estado tus espacios residenciales o comerciales."],
  ["🏢", "Gestión inmobiliaria", "Acompañamiento para publicar propiedades y orientar a quienes buscan un inmueble.", "Podemos orientarte sobre la información necesaria para presentar una propiedad a posibles interesados."],
].map(([icono, titulo, descripcion, detalle], orden) => ({ icono, titulo, descripcion, detalle, orden }));

const proyectos = [
  ["imagen-1.jpg", "Ejemplo de proyecto de construcción", "Construcción", "Proyectos a tu medida", "Planeamos soluciones según las necesidades de cada cliente."],
  ["imagen-2.jpg", "Ejemplo de propiedad inmobiliaria", "Inmobiliaria", "Propiedades para descubrir", "Espacios para vivir, invertir o desarrollar nuevas ideas."],
  ["imagen-4.png", "Ejemplo de obra y acabados", "Remodelación", "Renovamos tus espacios", "Mejoras funcionales y estéticas para dar nueva vida a tus espacios."],
].map(([imagen, alt, estado, titulo, texto], orden) => ({ imagen, alt, estado, titulo, texto, orden }));

async function upsertar(Modelo, docs) {
  for (const doc of docs) {
    await Modelo.updateOne({ titulo: doc.titulo }, { $set: doc }, { upsert: true });
  }
}

try {
  await conectarDB();
  await upsertar(Servicio, servicios);
  await upsertar(Proyecto, proyectos);
  console.log(`Listo: ${servicios.length} servicios y ${proyectos.length} proyectos cargados.`);
} catch (err) {
  console.error("Error en el seed:", err.message);
  process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}
