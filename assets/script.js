alert("javascript cargado correctamente");
document.addEventListener("DOMContentLoaded", function () {
    configurarMenu();
    configurarCarrusel();
    configurarDetallesServicios();
    configurarFormulario();
    configurarBotonVolverArriba();
});


function configurarMenu() {
    const botonMenu = document.getElementById("boton-menu");
    const menu = document.getElementById("menu-principal");

    if (!botonMenu || !menu) return;

    botonMenu.addEventListener("click", function () {
        menu.classList.toggle("abierto");

        const menuAbierto = menu.classList.contains("abierto");
        botonMenu.setAttribute("aria-expanded", menuAbierto);
        botonMenu.innerHTML = menuAbierto ? "✕ <span>Cerrar</span>" : "☰ <span>Menú</span>";
    });

    menu.querySelectorAll("a").forEach(function (enlace) {
        enlace.addEventListener("click", function () {
            menu.classList.remove("abierto");
            botonMenu.setAttribute("aria-expanded", "false");
            botonMenu.innerHTML = "☰ <span>Menú</span>";
        });
    });
}

function configurarCarrusel() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const botonAnterior = document.getElementById("slider-anterior");
    const botonSiguiente = document.getElementById("slider-siguiente");
    const puntos = document.querySelectorAll(".slider-nav button");

    if (!slider || slides.length === 0) return;

    let indiceActual = 0;
    let temporizador;

    function mostrarSlide(indice) {
        // Si llegamos al final, volvemos a la primera imagen y viceversa.
        if (indice >= slides.length) indice = 0;
        if (indice < 0) indice = slides.length - 1;

        indiceActual = indice;
        slider.scrollTo({
            left: slides[indiceActual].offsetLeft,
            behavior: "smooth"
        });

        puntos.forEach(function (punto, posicion) {
            punto.classList.toggle("activo", posicion === indiceActual);
        });
    }

    function iniciarCarruselAutomatico() {
        detenerCarruselAutomatico();
        temporizador = setInterval(function () {
            mostrarSlide(indiceActual + 1);
        }, 6000);
    }

    function detenerCarruselAutomatico() {
        clearInterval(temporizador);
    }

    if (botonAnterior) {
        botonAnterior.addEventListener("click", function () {
            mostrarSlide(indiceActual - 1);
            iniciarCarruselAutomatico();
        });
    }

    if (botonSiguiente) {
        botonSiguiente.addEventListener("click", function () {
            mostrarSlide(indiceActual + 1);
            iniciarCarruselAutomatico();
        });
    }

    puntos.forEach(function (punto) {
        punto.addEventListener("click", function () {
            mostrarSlide(Number(punto.dataset.slide));
            iniciarCarruselAutomatico();
        });
    });

    
    slider.addEventListener("mouseenter", detenerCarruselAutomatico);
    slider.addEventListener("mouseleave", iniciarCarruselAutomatico);

    mostrarSlide(0);
    iniciarCarruselAutomatico();
}

function configurarDetallesServicios() {
    const botones = document.querySelectorAll(".boton-detalle");

    botones.forEach(function (boton) {
        boton.addEventListener("click", function () {
            const tarjeta = boton.closest(".tarjeta");
            const detalle = tarjeta.querySelector(".detalle-servicio");
            const debeMostrar = detalle.hidden;

            detalle.hidden = !debeMostrar;
            boton.setAttribute("aria-expanded", debeMostrar);
            boton.textContent = debeMostrar ? "Mostrar menos" : "Más información";
        });
    });
}

function configurarFormulario() {
    const formulario = document.getElementById("formulario-contacto");
    const mensaje = document.getElementById("mensaje-formulario");

    if (!formulario || !mensaje) return;

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault(); // Evita recargar la página.

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const servicio = document.getElementById("servicio").value;
        const texto = document.getElementById("mensaje").value.trim();

        if (!nombre || !correo || !servicio || !texto) {
            mensaje.textContent = "Por favor, completa todos los campos antes de continuar.";
            mensaje.className = "mensaje-formulario error";
            return;
        }

        mensaje.textContent = "¡Gracias, " + nombre + "! Los datos se revisaron correctamente. Esta es una demostración: todavía no se envía un correo real.";
        mensaje.className = "mensaje-formulario exito";
        formulario.reset();
    });
}

function configurarBotonVolverArriba() {
    const boton = document.getElementById("volver-arriba");

    if (!boton) return;

    window.addEventListener("scroll", function () {
        boton.classList.toggle("visible", window.scrollY > 350);
    });

    boton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}