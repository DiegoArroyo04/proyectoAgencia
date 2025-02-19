document.addEventListener("DOMContentLoaded", function () {

    //AL PULSAR INICIAR SESION REDIRIGIR AL LOGIN
    document.getElementById("iniciarSesionBoton").addEventListener("click", function () {

        window.location.href = 'login.html';
    });

    //AL PULSAR EN SELLO ACESSIBILIDAD REDIRIGIR
    document.getElementById("selloAccesibilidad").addEventListener("click", function () {

        window.location.href = 'https://www.w3.org/WAI/WCAG2AA-Conformance';
    });

    //AL PULSAR EN SELLO ACESSIBILIDAD REDIRIGIR
    document.getElementById("accesibilidad").addEventListener("click", function () {

        window.location.href = 'accesibilidad.html';
    });



    //AL CARGAR LA PAGINA ANIMAR MODAL
    document.getElementById("main").classList.add("animarModal");

    const imagenActual = document.getElementById("imagenActual");
    const imagenSiguiente = document.getElementById("imagenSiguiente");

    // Array de las rutas de las imágenes
    const imagenes = [
        "assets/carruselPaisaje1.jpeg",
        "assets/carruselPaisaje2.jpeg",
        "assets/carruselPaisaje3.jpeg",
        "assets/carruselPaisaje4.jpeg"
    ];

    var index = 0;  // Índice de la imagen actual (empezamos en 0, que es la imagen 1)

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
});


//AL PULSAR IPERSONALIZAR PAQUETE REDIRIGIR AL CONFIGURADOR
document.getElementById("personalizarPaquete").addEventListener("click", function () {

    window.location.href = 'configuradorPaquetes.html';
});

//AL PULSAR  PAQUETE DESTACADO REDIRIGIR 
document.getElementById("paquete1").addEventListener("click", function () {

    window.location.href = 'paqueteDestacado1.html';
});

//AL PULSAR  PAQUETE DESTACADO REDIRIGIR 
document.getElementById("paquete2").addEventListener("click", function () {

    window.location.href = 'paqueteDestacado2.html';
});

//AL PULSAR  PAQUETE DESTACADO REDIRIGIR 
document.getElementById("paquete3").addEventListener("click", function () {

    window.location.href = 'paqueteDestacado3.html';
});



