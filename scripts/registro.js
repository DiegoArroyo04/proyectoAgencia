// Mostrar modal de Términos y Condiciones
document.getElementById('terminosCondiciones').onclick = function () {
    modalTerminosCondiciones.style.display = "block";
}
var cerrarTerminosCondiciones = document.getElementById('cerrarTerminosCondiciones');

// Cerrar modal de Términos y Condiciones
cerrarTerminosCondiciones.onclick = function () {
    modalTerminosCondiciones.style.display = "none";
}

// Cerrar modal si el usuario hace clic fuera del modal
window.onclick = function (event) {

    if (event.target == modalTerminosCondiciones) {
        modalTerminosCondiciones.style.display = "none";
    }
}

//CERRAR MODAL
document.getElementById('botonAceptarTerminos').onclick = function () {
    modalTerminosCondiciones.style.display = "none";
};
