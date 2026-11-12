import mongoose from "mongoose";

const servicioSchema = new mongoose.Schema(
  {
    icono: { type: String, required: true },
    titulo: { type: String, required: true, unique: true },
    descripcion: { type: String, required: true },
    detalle: { type: String, required: true },
    orden: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Servicio", servicioSchema);
