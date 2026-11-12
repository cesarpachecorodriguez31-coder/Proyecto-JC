# Backend Proyecto JC (Express + MongoDB)

## Puesta en marcha
```bash
npm install
cp .env.example .env      # edita MONGODB_URI y ADMIN_API_KEY
npm run seed              # (opcional) carga servicios y proyectos
npm run dev               # http://localhost:4000
```
Requiere Node 20+ y MongoDB local o una URI de MongoDB Atlas.

## Endpoints
| Método | Ruta | Acceso | Descripción |
|---|---|---|---|
| GET | `/api/salud` | público | Estado del servidor y la BD |
| POST | `/api/contactos` | público (10/15 min por IP) | Guarda el formulario de contacto |
| GET | `/api/servicios` | público | Lista de servicios |
| GET | `/api/proyectos` | público | Lista de proyectos |
| GET | `/api/contactos?pagina=1&limite=20&leido=false` | `x-api-key` | Mensajes recibidos |
| PATCH | `/api/contactos/:id/leido` | `x-api-key` | Marcar leído (`{"leido": false}` para desmarcar) |
| DELETE | `/api/contactos/:id` | `x-api-key` | Eliminar |

Ejemplo:
```bash
curl -X POST localhost:4000/api/contactos -H 'Content-Type: application/json' \
  -d '{"nombre":"Cesar","correo":"cesar@mail.com","servicio":"Remodelación","mensaje":"Quiero cotizar"}'

curl localhost:4000/api/contactos -H 'x-api-key: TU_CLAVE'
```
