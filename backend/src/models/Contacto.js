import mongoose from "mongoose";
import { SERVICIOS_VALIDOS } from "../utils/validar.js";

const contactoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true, minlength: 2, maxlength: 80 },
    correo: { type: String, required: true, trim: true, lowercase: true, maxlength: 120 },
    servicio: { type: String, required: true, enum: SERVICIOS_VALIDOS },
    mensaje: { type: String, required: true, trim: true, minlength: 5, maxlength: 2000 },
    leido: { type: Boolean, default: false },
  },
  { timestamps: true }
);

contactoSchema.index({ createdAt: -1 });

export default mongoose.model("Contacto", contactoSchema);
