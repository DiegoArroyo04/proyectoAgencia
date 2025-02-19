/ Obtener los modales y los botones de cierre
var modalPoliticaPrivacidad = document.getElementById('modalPoliticaPrivacidad');
var modalAvisoLegal = document.getElementById('modalAvisoLegal');
var modalTerminosCondiciones = document.getElementById('modalTerminosCondiciones');

var cerrarPoliticaPrivacidad = document.getElementById('cerrarPoliticaPrivacidad');
var cerrarAvisoLegal = document.getElementById('cerrarAvisoLegal');
var cerrarTerminosCondiciones = document.getElementById('cerrarTerminosCondiciones');

// Mostrar modal de Política de Privacidad
document.getElementById('politicaPrivacidad').onclick = function () {
    modalPoliticaPrivacidad.style.display = "block";
}
// Mostrar modal de Aviso Legal
document.getElementById('avisoLegal').onclick = function () {
    modalAvisoLegal.style.display = "block";
}

// Mostrar modal de Términos y Condiciones
document.getElementById('terminosCondiciones').onclick = function () {
    modalTerminosCondiciones.style.display = "block";
}

// Cerrar modal de Política de Privacidad
cerrarPoliticaPrivacidad.onclick = function () {
    modalPoliticaPrivacidad.style.display = "none";
}

// Cerrar modal de Aviso Legal
cerrarAvisoLegal.onclick = function () {
    modalAvisoLegal.style.display = "none";
}

// Cerrar modal de Términos y Condiciones
cerrarTerminosCondiciones.onclick = function () {
    modalTerminosCondiciones.style.display = "none";
}

// Cerrar modal si el usuario hace clic fuera del modal
window.onclick = function (event) {
    if (event.target == modalPoliticaPrivacidad) {
        modalPoliticaPrivacidad.style.display = "none";
    }
    if (event.target == modalAvisoLegal) {
        modalAvisoLegal.style.display = "none";
    }
    if (event.target == modalTerminosCondiciones) {
        modalTerminosCondiciones.style.display = "none";
    }
}
});
