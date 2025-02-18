//AL PULSAR INICIAR SESION REDIRIGIR AL LOGIN
document.getElementById("iniciarSesionBoton").addEventListener("click", function () {

    window.location.href = 'login.html';
});

//AL CARGAR LA PAGINA ANIMAR MODAL
document.getElementById("configuradorContainer").classList.add("animarModal");


//AL PULSAR EN SELLO ACESSIBILIDAD REDIRIGIR
document.getElementById("selloAccesibilidad").addEventListener("click", function () {

    window.location.href = 'https://www.w3.org/WAI/WCAG2AA-Conformance';
});


// Crear el mapa
var map = L.map('map').setView([35.6762, 139.7503], 12);  // Coordenadas de Tokio

// Usar el estilo CartoDB Positron para un efecto cálido
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 19
}).addTo(map);

// Crear un marcador en Tokio
L.marker([35.6762, 139.7406]).addTo(map)
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
    document.getElementById("continuarPrimeraPantalla").style.display = "none";

    document.getElementById("paso2Configurador").style.display = "flex";

    //ANIMAR MODAL
    document.getElementById("configuradorContainer").classList.remove("animarModal");
    void document.getElementById("configuradorContainer").offsetWidth;
    document.getElementById("configuradorContainer").classList.add("animarModal");



})


//ABRIR CALENDARIO
function openCalendar(inputId) {
    var input = document.getElementById(inputId);
    input.showPicker();
}


//VOLVER AL PASO 1
document.getElementById("volverBoton2").addEventListener("click", function () {
    window.location.href = 'configuradorPaquetes.html';
});

//ABRIR PASO 3 CONFIGURADOR PAQUETE
document.getElementById("continuarBoton2").addEventListener("click", function () {
    //ESCONDER PASO 2
    document.getElementById("paso2Configurador").style.display = "none";
    document.getElementById("busquedaDestino").style.display = "none";

    //MOSTRAR PASO 3
    document.getElementById("paso3Configurador").style.display = "flex";

    //ANIMAR MODAL
    document.getElementById("configuradorContainer").classList.remove("animarModal");
    void document.getElementById("configuradorContainer").offsetWidth;
    document.getElementById("configuradorContainer").classList.add("animarModal");

});

//VOLVER AL PASO 2
document.getElementById("volverBoton3").addEventListener("click", function () {

    //ESCONDER PASO 3
    document.getElementById("paso3Configurador").style.display = "none";

    //MOSTRAR PASO 2
    document.getElementById("paso2Configurador").style.display = "flex";
    document.getElementById("busquedaDestino").style.display = "block";

    //ANIMAR MODAL
    document.getElementById("configuradorContainer").classList.remove("animarModal");
    void document.getElementById("configuradorContainer").offsetWidth;
    document.getElementById("configuradorContainer").classList.add("animarModal");


})

//AVANZAR AL PASO 4
document.getElementById("continuarBoton3").addEventListener("click", function () {

    //ESCONDER PASO 3
    document.getElementById("paso3Configurador").style.display = "none";

    //MOSTRAR PASO 4
    document.getElementById("paso4Configurador").style.display = "flex";

    //ANIMAR MODAL
    document.getElementById("configuradorContainer").classList.remove("animarModal");
    void document.getElementById("configuradorContainer").offsetWidth;
    document.getElementById("configuradorContainer").classList.add("animarModal");

});

//AVANZAR AL PASO 4
document.getElementById("alojamiento1Seleccion").addEventListener("click", function () {

    //ESCONDER PASO 3
    document.getElementById("paso3Configurador").style.display = "none";

    //MOSTRAR PASO 4
    document.getElementById("paso4Configurador").style.display = "flex";

    //ANIMAR MODAL
    document.getElementById("configuradorContainer").classList.remove("animarModal");
    void document.getElementById("configuradorContainer").offsetWidth;
    document.getElementById("configuradorContainer").classList.add("animarModal");

});


//AVANZAR AL PASO 4
document.getElementById("alojamiento2Seleccion").addEventListener("click", function () {

    //ESCONDER PASO 3
    document.getElementById("paso3Configurador").style.display = "none";

    //MOSTRAR PASO 4
    document.getElementById("paso4Configurador").style.display = "flex";

    //ANIMAR MODAL
    document.getElementById("configuradorContainer").classList.remove("animarModal");
    void document.getElementById("configuradorContainer").offsetWidth;
    document.getElementById("configuradorContainer").classList.add("animarModal");

});


//AVANZAR AL PASO 4
document.getElementById("alojamiento3Seleccion").addEventListener("click", function () {

    //ESCONDER PASO 3
    document.getElementById("paso3Configurador").style.display = "none";

    //MOSTRAR PASO 4
    document.getElementById("paso4Configurador").style.display = "flex";

    //ANIMAR MODAL
    document.getElementById("configuradorContainer").classList.remove("animarModal");
    void document.getElementById("configuradorContainer").offsetWidth;
    document.getElementById("configuradorContainer").classList.add("animarModal");

});


//VOLVER AL PASO 3
document.getElementById("volverBoton4").addEventListener("click", function () {

    //ESCONDER PASO 4
    document.getElementById("paso4Configurador").style.display = "none";

    //MOSTRAR PASO 3
    document.getElementById("paso3Configurador").style.display = "flex";

    //ANIMAR MODAL
    document.getElementById("configuradorContainer").classList.remove("animarModal");
    void document.getElementById("configuradorContainer").offsetWidth;
    document.getElementById("configuradorContainer").classList.add("animarModal");


})


//AVANZAR AL PASO 5
document.getElementById("continuarBoton4").addEventListener("click", function () {

    //ESCONDER PASO 4
    document.getElementById("paso4Configurador").style.display = "none";

    //MOSTRAR PASO 4
    document.getElementById("paso5Configurador").style.display = "flex";

    //ANIMAR MODAL
    document.getElementById("configuradorContainer").classList.remove("animarModal");
    void document.getElementById("configuradorContainer").offsetWidth;
    document.getElementById("configuradorContainer").classList.add("animarModal");

});


//AVANZAR AL PASO 5
document.getElementById("actividad1Seleccion").addEventListener("click", function () {

    //ESCONDER PASO 4
    document.getElementById("paso4Configurador").style.display = "none";

    //MOSTRAR PASO 4
    document.getElementById("paso5Configurador").style.display = "flex";

    //ANIMAR MODAL
    document.getElementById("configuradorContainer").classList.remove("animarModal");
    void document.getElementById("configuradorContainer").offsetWidth;
    document.getElementById("configuradorContainer").classList.add("animarModal");

});

//AVANZAR AL PASO 5
document.getElementById("actividad2Seleccion").addEventListener("click", function () {

    //ESCONDER PASO 4
    document.getElementById("paso4Configurador").style.display = "none";

    //MOSTRAR PASO 4
    document.getElementById("paso5Configurador").style.display = "flex";

    //ANIMAR MODAL
    document.getElementById("configuradorContainer").classList.remove("animarModal");
    void document.getElementById("configuradorContainer").offsetWidth;
    document.getElementById("configuradorContainer").classList.add("animarModal");

});

//AVANZAR AL PASO 5
document.getElementById("actividad3Seleccion").addEventListener("click", function () {

    //ESCONDER PASO 4
    document.getElementById("paso4Configurador").style.display = "none";

    //MOSTRAR PASO 4
    document.getElementById("paso5Configurador").style.display = "flex";

    //ANIMAR MODAL
    document.getElementById("configuradorContainer").classList.remove("animarModal");
    void document.getElementById("configuradorContainer").offsetWidth;
    document.getElementById("configuradorContainer").classList.add("animarModal");

});

//VOLVER AL PASO 4
document.getElementById("volverBoton5").addEventListener("click", function () {

    //ESCONDER PASO 5
    document.getElementById("paso5Configurador").style.display = "none";

    //MOSTRAR PASO 4
    document.getElementById("paso4Configurador").style.display = "flex";

    //ANIMAR MODAL
    document.getElementById("configuradorContainer").classList.remove("animarModal");
    void document.getElementById("configuradorContainer").offsetWidth;
    document.getElementById("configuradorContainer").classList.add("animarModal");


})

//AVANZAR AL PASO 6
document.getElementById("continuarBoton5").addEventListener("click", function () {

    //ESCONDER PASO 5
    document.getElementById("paso5Configurador").style.display = "none";

    //MOSTRAR PASO 6
    document.getElementById("paso6Configurador").style.display = "flex";

    //ANIMAR MODAL
    document.getElementById("configuradorContainer").classList.remove("animarModal");
    void document.getElementById("configuradorContainer").offsetWidth;
    document.getElementById("configuradorContainer").classList.add("animarModal");

});


document.getElementById("transporte1Seleccion").addEventListener("click", function () {

    //ESCONDER PASO 5
    document.getElementById("paso5Configurador").style.display = "none";

    //MOSTRAR PASO 6
    document.getElementById("paso6Configurador").style.display = "flex";

    //ANIMAR MODAL
    document.getElementById("configuradorContainer").classList.remove("animarModal");
    void document.getElementById("configuradorContainer").offsetWidth;
    document.getElementById("configuradorContainer").classList.add("animarModal");

});


document.getElementById("transporte2Seleccion").addEventListener("click", function () {

    //ESCONDER PASO 5
    document.getElementById("paso5Configurador").style.display = "none";

    //MOSTRAR PASO 6
    document.getElementById("paso6Configurador").style.display = "flex";

    //ANIMAR MODAL
    document.getElementById("configuradorContainer").classList.remove("animarModal");
    void document.getElementById("configuradorContainer").offsetWidth;
    document.getElementById("configuradorContainer").classList.add("animarModal");

});

document.getElementById("transporte3Seleccion").addEventListener("click", function () {

    //ESCONDER PASO 5
    document.getElementById("paso5Configurador").style.display = "none";

    //MOSTRAR PASO 6
    document.getElementById("paso6Configurador").style.display = "flex";

    //ANIMAR MODAL
    document.getElementById("configuradorContainer").classList.remove("animarModal");
    void document.getElementById("configuradorContainer").offsetWidth;
    document.getElementById("configuradorContainer").classList.add("animarModal");

});


//VOLVER AL PASO 5
document.getElementById("volverBoton6").addEventListener("click", function () {

    //ESCONDER PASO 6
    document.getElementById("paso6Configurador").style.display = "none";

    //MOSTRAR PASO 3
    document.getElementById("paso5Configurador").style.display = "flex";

    //ANIMAR MODAL
    document.getElementById("configuradorContainer").classList.remove("animarModal");
    void document.getElementById("configuradorContainer").offsetWidth;
    document.getElementById("configuradorContainer").classList.add("animarModal");


})



//AVANZAR A LA PASARELA DE PAGO
document.getElementById("reservar").addEventListener("click", function () {

    //ESCONDER PASO 6
    document.getElementById("paso6Configurador").style.display = "none";

    //ESCONDER FOTO DESTINO
    document.getElementById("fotoDestino").style.display = "none";

    //MOSTRAR PASARELA DE PAGO
    document.getElementById("ultimoPaso").style.display = "flex";
    document.getElementById("pasarelaPago").style.display = "flex";

    //ANIMAR MODAL
    document.getElementById("configuradorContainer").classList.remove("animarModal");
    void document.getElementById("configuradorContainer").offsetWidth;
    document.getElementById("configuradorContainer").classList.add("animarModal");

    document.getElementById("pasarelaPago").classList.add("animarModal");

});

//AL PULSAR AGREGAR AL COMPARADOR DE PAQUETES REDIGRIGIR
document.getElementById("agregarComparadorBoton").addEventListener("click", function () {

    window.location.href = 'comparadorPaquetes.html';

});

//REVISAR SI ESTAMOS LLAMANDO A LA PASARELA DE PAGO DIRECTAMENTE
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const mostrarPasarela = urlParams.get('pasarela');

    if (mostrarPasarela === 'mostrar') {

        //ESCONDER CAMPOS
        document.getElementById("map").style.display = "none";
        document.getElementById("continuarPrimeraPantalla").style.display = "none";
        document.getElementById("fotoDestino").style.display = "none";
        document.getElementById("busquedaDestino").style.display = "none";

        //ANIMAR MODAL
        document.getElementById("configuradorContainer").classList.remove("animarModal");
        void document.getElementById("configuradorContainer").offsetWidth;
        document.getElementById("configuradorContainer").classList.add("animarModal");

        document.getElementById("ultimoPaso").style.display = "flex";
        document.getElementById("pasarelaPago").style.display = "flex";
    }
}

