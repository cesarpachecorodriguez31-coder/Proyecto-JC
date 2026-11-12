// Validación sin dependencias, para que sea fácil de probar.
export const SERVICIOS_VALIDOS = [
  "Construcción",
  "Compra o venta de inmueble",
  "Remodelación",
  "Mantenimiento",
  "Otro servicio",
];

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Valida el cuerpo del formulario de contacto.
 * Devuelve { errores, datos }; si errores está vacío, datos está limpio y listo para guardar.
 */
export function validarContacto(body) {
  const errores = {};
  const b = body && typeof body === "object" && !Array.isArray(body) ? body : {};

  // Solo se aceptan strings (evita inyección de operadores tipo {"$ne": ""}).
  const texto = (v) => (typeof v === "string" ? v.trim() : "");

  const nombre = texto(b.nombre);
  const correo = texto(b.correo).toLowerCase();
  const servicio = texto(b.servicio);
  const mensaje = texto(b.mensaje);

  if (nombre.length < 2 || nombre.length > 80) errores.nombre = "El nombre debe tener entre 2 y 80 caracteres.";
  if (!EMAIL.test(correo) || correo.length > 120) errores.correo = "Escribe un correo electrónico válido.";
  if (!SERVICIOS_VALIDOS.includes(servicio)) errores.servicio = "Selecciona un servicio de la lista.";
  if (mensaje.length < 5 || mensaje.length > 2000) errores.mensaje = "El mensaje debe tener entre 5 y 2000 caracteres.";

  return { errores, datos: { nombre, correo, servicio, mensaje } };
}
