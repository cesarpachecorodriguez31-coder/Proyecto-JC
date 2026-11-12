import { Router } from "express";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import Contacto from "../models/Contacto.js";
import { adminAuth } from "../middleware/adminAuth.js";
import { validarContacto } from "../utils/validar.js";

const router = Router();

// Máx. 10 envíos por IP cada 15 minutos para frenar spam.
const limitarEnvios = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "Demasiados envíos. Inténtalo de nuevo más tarde." },
});

const idValido = (req, res, next) =>
  mongoose.isValidObjectId(req.params.id) ? next() : res.status(400).json({ error: "Identificador inválido." });

// Público: recibe el formulario del frontend.
router.post("/", limitarEnvios, async (req, res, next) => {
  try {
    const { errores, datos } = validarContacto(req.body);
    if (Object.keys(errores).length > 0) {
      return res.status(400).json({ error: "Revisa los campos del formulario.", errores });
    }

    const contacto = await Contacto.create(datos);
    res.status(201).json({ mensaje: "Consulta recibida correctamente.", id: contacto._id });
  } catch (err) {
    next(err);
  }
});

// Administración (requiere x-api-key)
router.get("/", adminAuth, async (req, res, next) => {
  try {
    const pagina = Math.max(parseInt(req.query.pagina, 10) || 1, 1);
    const limite = Math.min(Math.max(parseInt(req.query.limite, 10) || 20, 1), 100);
    const filtro = req.query.leido === "true" ? { leido: true } : req.query.leido === "false" ? { leido: false } : {};

    const [items, total] = await Promise.all([
      Contacto.find(filtro).sort({ createdAt: -1 }).skip((pagina - 1) * limite).limit(limite).lean(),
      Contacto.countDocuments(filtro),
    ]);

    res.json({ items, total, pagina, paginas: Math.ceil(total / limite) });
  } catch (err) {
    next(err);
  }
});

router.patch("/:id/leido", adminAuth, idValido, async (req, res, next) => {
  try {
    const leido = req.body?.leido === false ? false : true;
    const contacto = await Contacto.findByIdAndUpdate(req.params.id, { leido }, { new: true });
    if (!contacto) return res.status(404).json({ error: "Contacto no encontrado." });
    res.json(contacto);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", adminAuth, idValido, async (req, res, next) => {
  try {
    const contacto = await Contacto.findByIdAndDelete(req.params.id);
    if (!contacto) return res.status(404).json({ error: "Contacto no encontrado." });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

export default router;
