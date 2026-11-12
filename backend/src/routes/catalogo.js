import { Router } from "express";
import Servicio from "../models/Servicio.js";
import Proyecto from "../models/Proyecto.js";

const router = Router();

router.get("/servicios", async (req, res, next) => {
  try {
    res.json(await Servicio.find().sort({ orden: 1 }).lean());
  } catch (err) {
    next(err);
  }
});

router.get("/proyectos", async (req, res, next) => {
  try {
    res.json(await Proyecto.find().sort({ orden: 1 }).lean());
  } catch (err) {
    next(err);
  }
});

export default router;
