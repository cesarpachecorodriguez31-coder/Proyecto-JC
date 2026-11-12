import imagen1 from "../assets/img/imagen-1.jpg";
import imagen2 from "../assets/img/imagen-2.jpg";
import imagen3 from "../assets/img/imagen-3.jpg";
import imagen4 from "../assets/img/imagen-4.png";

export const enlaces = [
  { href: "#inicio", texto: "Inicio" },
  { href: "#nosotros", texto: "Nosotros" },
  { href: "#servicios", texto: "Servicios" },
  { href: "#proyectos", texto: "Proyectos" },
  { href: "#contacto", texto: "Contacto" },
];

export const slides = [
  {
    imagen: imagen1,
    alt: "Proyecto de construcción",
    etiqueta: "Construimos tus ideas",
    titulo: "Hacemos realidad tus proyectos",
    texto: "Soluciones de construcción e inmobiliaria pensadas para ti.",
    boton: "Conoce nuestros servicios",
    enlace: "#servicios",
  },
  {
    imagen: imagen2,
    alt: "Propiedad disponible",
    etiqueta: "Bienes raíces",
    titulo: "Encuentra el lugar ideal",
    texto: "Te acompañamos en la compra, venta o búsqueda de tu propiedad.",
    boton: "Ver proyectos",
    enlace: "#proyectos",
  },
  {
    imagen: imagen3,
    alt: "Asesoría para proyectos inmobiliarios",
    etiqueta: "Asesoría profesional",
    titulo: "Decisiones con confianza",
    texto: "Orientación cercana durante cada etapa de tu proyecto.",
    boton: "Contáctanos",
    enlace: "#contacto",
  },
  {
    imagen: imagen4,
    alt: "Obra de construcción",
    etiqueta: "Diseño y construcción",
    titulo: "Calidad en cada detalle",
    texto: "Construcción, remodelación y mantenimiento de espacios.",
    boton: "Explorar servicios",
    enlace: "#servicios",
  },
];

export const servicios = [
  {
    icono: "🏗️",
    titulo: "Construcción",
    descripcion: "Apoyo en la ejecución de obras nuevas, desde la planeación hasta los acabados.",
    detalle: "Podemos ayudarte a organizar las etapas iniciales de una obra y revisar las necesidades de tu proyecto.",
  },
  {
    icono: "🏠",
    titulo: "Compra y venta",
    descripcion: "Asesoría para buscar, ofrecer o vender casas, apartamentos y otros inmuebles.",
    detalle: "Podemos orientarte para definir qué tipo de inmueble buscas o qué información preparar para ofrecerlo.",
  },
  {
    icono: "🛠️",
    titulo: "Remodelación",
    descripcion: "Mejoras para renovar espacios, aprovechar áreas y darles una nueva apariencia.",
    detalle: "Revisamos contigo los cambios que deseas hacer para mejorar la comodidad y el uso de tus espacios.",
  },
  {
    icono: "📐",
    titulo: "Diseño y asesoría",
    descripcion: "Orientación inicial para organizar ideas, definir necesidades y planear tu proyecto.",
    detalle: "Te ayudamos a ordenar tus ideas y establecer prioridades antes de comenzar.",
  },
  {
    icono: "🔧",
    titulo: "Mantenimiento",
    descripcion: "Soluciones para conservar espacios residenciales o comerciales en buenas condiciones.",
    detalle: "Puedes consultar opciones para conservar en buen estado tus espacios residenciales o comerciales.",
  },
  {
    icono: "🏢",
    titulo: "Gestión inmobiliaria",
    descripcion: "Acompañamiento para publicar propiedades y orientar a quienes buscan un inmueble.",
    detalle: "Podemos orientarte sobre la información necesaria para presentar una propiedad a posibles interesados.",
  },
];

export const proyectos = [
  {
    imagen: imagen1,
    alt: "Ejemplo de proyecto de construcción",
    estado: "Construcción",
    titulo: "Proyectos a tu medida",
    texto: "Planeamos soluciones según las necesidades de cada cliente.",
  },
  {
    imagen: imagen2,
    alt: "Ejemplo de propiedad inmobiliaria",
    estado: "Inmobiliaria",
    titulo: "Propiedades para descubrir",
    texto: "Espacios para vivir, invertir o desarrollar nuevas ideas.",
  },
  {
    imagen: imagen4,
    alt: "Ejemplo de obra y acabados",
    estado: "Remodelación",
    titulo: "Renovamos tus espacios",
    texto: "Mejoras funcionales y estéticas para dar nueva vida a tus espacios.",
  },
];

export const opcionesServicio = [
  "Construcción",
  "Compra o venta de inmueble",
  "Remodelación",
  "Mantenimiento",
  "Otro servicio",
];
