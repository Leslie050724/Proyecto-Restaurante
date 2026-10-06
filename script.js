const botonMenu = document.getElementById("botonMenu");
const menuCompleto = document.getElementById("menuCompleto");

botonMenu.addEventListener("click", function() {

    menuCompleto.classList.toggle("menu-oculto");
    menuCompleto.classList.toggle("menu-visible");

});
const botonReserva = document.getElementById("botonReserva");
const formularioReserva = document.getElementById("formularioReserva");
const formReserva = document.getElementById("formReserva");
const mensajeReserva = document.getElementById("mensajeReserva");

botonReserva.addEventListener("click", function() {

    formularioReserva.classList.toggle("formulario-oculto");
    formularioReserva.classList.toggle("formulario-visible");

});
formReserva.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const personas = document.getElementById("personas").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    mensajeReserva.textContent =
        `Reserva realizada para ${nombre}: ${personas} personas, el ${fecha} a las ${hora}.`;

});