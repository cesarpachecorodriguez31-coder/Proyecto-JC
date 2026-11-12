import mongoose from "mongoose";

const proyectoSchema = new mongoose.Schema(
  {
    // Nombre del archivo de imagen (p. ej. "imagen-1.jpg"); el frontend lo asocia a su asset.
    imagen: { type: String, required: true },
    alt: { type: String, required: true },
    estado: { type: String, required: true },
    titulo: { type: String, required: true, unique: true },
    texto: { type: String, required: true },
    orden: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Proyecto", proyectoSchema);
