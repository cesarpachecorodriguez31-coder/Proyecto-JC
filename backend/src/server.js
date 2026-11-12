import mongoose from "mongoose";
import { conectarDB } from "./config/db.js";
import { crearApp } from "./app.js";

const PUERTO = process.env.PORT || 4000;

try {
  await conectarDB();
} catch (err) {
  console.error("No se pudo conectar a MongoDB:", err.message);
  process.exit(1);
}

const servidor = crearApp().listen(PUERTO, () => {
  console.log(`API escuchando en http://localhost:${PUERTO}`);
});

async function cerrar() {
  servidor.close(async () => {
    await mongoose.disconnect();
    process.exit(0);
  });
}
process.on("SIGINT", cerrar);
process.on("SIGTERM", cerrar);
