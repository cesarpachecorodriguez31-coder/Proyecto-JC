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