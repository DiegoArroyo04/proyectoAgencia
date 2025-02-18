//AL PULSAR INICIAR SESION REDIRIGIR AL LOGIN
document.getElementById("iniciarSesionBoton").addEventListener("click", function () {

    window.location.href = 'login.html';
});

const imagenActual = document.getElementById("imagenActual");
const imagenSiguiente = document.getElementById("imagenSiguiente");

// Array de las rutas de las imágenes
const imagenes = [
    "assets/bosque1.png",
    "assets/bosque2.png",
    "assets/bosque3.png",
    "assets/bosque4.png",
];

//AL PULSAR EN SELLO ACESSIBILIDAD REDIRIGIR
document.getElementById("selloAccesibilidad").addEventListener("click", function () {

    window.location.href = 'https://www.w3.org/WAI/WCAG2AA-Conformance';
});



var index = 0;  // Índice de la imagen actual (empezamos en 0, que es la imagen 1)

//AL CARGAR LA PAGINA ANIMAR MODAL
document.getElementById("main").classList.add("animarModal");


// Inicializar la imagen inicial
imagenActual.style.backgroundImage = "url(" + imagenes[index] + ")";

function cambiarImagen() {
    // Cambiar la imagen de fondo de la imagen siguiente
    index = (index + 1) % imagenes.length; // Cicla entre las imágenes
    imagenSiguiente.style.backgroundImage = "url(" + imagenes[index] + ")";

    // Hacer visible la imagen siguiente con opacidad 1
    imagenSiguiente.style.opacity = 1;

    // Después de la transición (3 segundos), mover la imagen siguiente a la imagen actual
    setTimeout(function () {
        // Mover la imagen siguiente a la imagen actual
        imagenActual.style.backgroundImage = imagenSiguiente.style.backgroundImage;
        imagenActual.style.opacity = 1; // Asegura que la imagen actual siga visible

        // Limpiar la imagen siguiente
        imagenSiguiente.style.backgroundImage = '';
        imagenSiguiente.style.opacity = 0; // Ocultar la imagen siguiente para el próximo cambio

    }, 3000);
}

// Cambiar la imagen cada 6 segundos
setInterval(cambiarImagen, 6000);


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

// Crear el mapa
var map = L.map('map').setView([50.7345, 4.4160], 12);  // Coordenadas de Hallerbos

// Usar el estilo CartoDB Positron para un efecto cálido
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 19
}).addTo(map);

// Crear un marcador en Hallerbos
L.marker([50.7345, 4.4160]).addTo(map)
    .bindPopup("<b>Hallerbos</b>")
    .openPopup();

//AL PULSAR RESERVAR REDIRIGIR REDIRIGIR 
document.getElementById("reservarYPagar").addEventListener("click", function () {

    window.location.href = 'configuradorPaquetes.html?pasarela=mostrar';


});


//AL PULSAR RESERVAR REDIRIGIR REDIRIGIR 
document.getElementById("comparador").addEventListener("click", function () {

    window.location.href = 'comparadorPaquetes.html';


});