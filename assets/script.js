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

    // Pausar el cambio automático mientras el cursor está sobre el carrusel.
    slider.addEventListener("mouseenter", detenerCarruselAutomatico);
    slider.addEventListener("mouseleave", iniciarCarruselAutomatico);

    mostrarSlide(0);
    iniciarCarruselAutomatico();
}
