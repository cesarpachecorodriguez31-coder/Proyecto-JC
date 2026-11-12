export function noEncontrado(req, res) {
  res.status(404).json({ error: `Ruta no encontrada: ${req.method} ${req.originalUrl}` });
}

// eslint-disable-next-line no-unused-vars
export function manejarErrores(err, req, res, next) {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ error: "El cuerpo de la petición no es un JSON válido." });
  }
  if (err.type === "entity.too.large") {
    return res.status(413).json({ error: "La petición es demasiado grande." });
  }
  if (err.name === "ValidationError") {
    return res.status(400).json({ error: "Datos inválidos.", detalles: err.message });
  }
  if (err.name === "CastError") {
    return res.status(400).json({ error: "Identificador inválido." });
  }
  if (err.message === "Origen no permitido por CORS") {
    return res.status(403).json({ error: err.message });
  }

  console.error(err);
  res.status(500).json({ error: "Error interno del servidor." });
}
