import test from "node:test";
import assert from "node:assert/strict";
import { validarContacto } from "./validar.js";

const ok = { nombre: " Cesar ", correo: "CESAR@Mail.com", servicio: "Remodelación", mensaje: "Hola, quiero cotizar" };

test("acepta datos válidos y los limpia", () => {
  const { errores, datos } = validarContacto(ok);
  assert.deepEqual(errores, {});
  assert.equal(datos.nombre, "Cesar");
  assert.equal(datos.correo, "cesar@mail.com");
});

test("rechaza campos vacíos", () => {
  const { errores } = validarContacto({});
  assert.deepEqual(Object.keys(errores).sort(), ["correo", "mensaje", "nombre", "servicio"]);
});

test("rechaza correo inválido y servicio fuera de la lista", () => {
  const { errores } = validarContacto({ ...ok, correo: "no-es-correo", servicio: "Hackeo" });
  assert.ok(errores.correo && errores.servicio);
});

test("rechaza operadores de Mongo y valores no string", () => {
  const { errores } = validarContacto({ ...ok, correo: { $ne: "" }, nombre: ["a", "b"] });
  assert.ok(errores.correo && errores.nombre);
});

test("rechaza body no objeto", () => {
  assert.equal(Object.keys(validarContacto(null).errores).length, 4);
  assert.equal(Object.keys(validarContacto("x").errores).length, 4);
});

test("rechaza mensaje demasiado largo", () => {
  const { errores } = validarContacto({ ...ok, mensaje: "a".repeat(2001) });
  assert.ok(errores.mensaje);
});
