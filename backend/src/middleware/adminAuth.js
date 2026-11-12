import { timingSafeEqual } from "node:crypto";

/** Protege rutas de administración con el header `x-api-key`. */
export function adminAuth(req, res, next) {
  const esperada = process.env.ADMIN_API_KEY;
  if (!esperada) {
    return res.status(503).json({ error: "Administración deshabilitada: falta ADMIN_API_KEY." });
  }

  const recibida = req.get("x-api-key") ?? "";
  const a = Buffer.from(recibida);
  const b = Buffer.from(esperada);
  const valida = a.length === b.length && timingSafeEqual(a, b);

  if (!valida) return res.status(401).json({ error: "No autorizado." });
  next();
}
