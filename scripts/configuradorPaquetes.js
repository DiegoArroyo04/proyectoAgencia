//AL PULSAR INICIAR SESION REDIRIGIR AL LOGIN
document.getElementById("iniciarSesionBoton").addEventListener("click", function () {

    window.location.href = 'login.html';
});


// Crear el mapa
var map = L.map('map').setView([35.6762, 139.6503], 12);  // Coordenadas de Tokio

// Usar el estilo CartoDB Positron para un efecto cálido
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 19
}).addTo(map);

// Crear un marcador en Tokio
L.marker([35.6762, 139.6503]).addTo(map)
    .bindPopup("<b>Tokio</b>")
    .openPopup();

// Obtener los modales y los botones de cierre
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

//PRIMER BOTON DE CONTINUAR
document.getElementById("continuarBoton1").addEventListener("click", function () {
    //CUANDO PULSE EL BOTON DE CONTINUAR ESCONDO EL MAPA  Y MUESTRO EL FORMULARIO DE DATOS
    document.getElementById("map").style.display = "none";

    document.getElementById("datosPaquete").style.display = "flex";
})