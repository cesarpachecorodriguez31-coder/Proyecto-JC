import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import contactos from "./routes/contactos.js";
import catalogo from "./routes/catalogo.js";
import { noEncontrado, manejarErrores } from "./middleware/errores.js";

export function crearApp() {
  const app = express();

  const origenes = (process.env.CORS_ORIGIN ?? "http://localhost:5173")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);

  app.use(helmet());
  app.use(
    cors({
      origin(origen, cb) {
        // Sin header Origin (curl, Postman, mismo origen) se permite.
        if (!origen || origenes.includes(origen)) return cb(null, true);
        cb(new Error("Origen no permitido por CORS"));
      },
      methods: ["GET", "POST", "PATCH", "DELETE"],
    })
  );
  app.use(express.json({ limit: "10kb" }));

  app.get("/api/salud", (req, res) => {
    const conectado = mongoose.connection.readyState === 1;
    res.status(conectado ? 200 : 503).json({ estado: conectado ? "ok" : "sin conexión a la base de datos" });
  });

  app.use("/api/contactos", contactos);
  app.use("/api", catalogo);

  app.use(noEncontrado);
  app.use(manejarErrores);
  return app;
}
