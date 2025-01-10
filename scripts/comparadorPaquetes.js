//AL PULSAR INICIAR SESION REDIRIGIR AL LOGIN
document.getElementById("iniciarSesionBoton").addEventListener("click", function () {

    window.location.href = 'login.html';
});

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
};

//ELIMINAR PAQUETES AL PULSAR SOBRE PAPELERA
document.getElementById('papelera1').addEventListener("click", function () {

    document.getElementById('paquete1').style.display = "none";

    //ANIMACION SUAVE
    document.getElementById("comparadorPaquetes").classList.remove("animarModal");
    void document.getElementById("comparadorPaquetes").offsetWidth;
    document.getElementById("comparadorPaquetes").classList.add("animarModal");
});

document.getElementById('papelera2').addEventListener("click", function () {

    document.getElementById('paquete2').style.display = "none";


    //ANIMACION SUAVE
    document.getElementById("comparadorPaquetes").classList.remove("animarModal");
    void document.getElementById("comparadorPaquetes").offsetWidth;
    document.getElementById("comparadorPaquetes").classList.add("animarModal");
});

document.getElementById('papelera3').addEventListener("click", function () {

    document.getElementById('paquete3').style.display = "none";


    //ANIMACION SUAVE
    document.getElementById("comparadorPaquetes").classList.remove("animarModal");
    void document.getElementById("comparadorPaquetes").offsetWidth;
    document.getElementById("comparadorPaquetes").classList.add("animarModal");
});

const ctx = document.getElementById('graficoBarras').getContext('2d');

var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['PRECIO', 'POPULARIDAD DESTINO', 'POPULARIDAD ALOJAMIENTO', 'COMODIDAD TRANSPORTE', 'DURACION VIAJE'],
        datasets: [{
            label: 'PAQUETE PERSONALIZADO TOKYO',
            backgroundColor: '#FF9A62',
            borderRadius: 10,
            data: [3, 4, 3, 4, 3]
        },
        {
            label: 'PAQUETE SERENIDAD EN SANTORINI',
            backgroundColor: '#FFC875',
            borderRadius: 10,
            data: [5, 5, 5, 3, 5]
        },
        {
            label: 'PAQUETE ECO-AVENTURA EN COSTA RICA',
            backgroundColor: '#00BFA6',
            borderRadius: 10,
            data: [4, 3, 4, 5, 4]

        }]
    },
    options: {
        scales: {
            x: {
                grid: {

                    display: false // Desactivar la cuadrícula del eje X
                },
                ticks: {
                    display: true, // Mostrar los ticks si es necesario

                }
            },
            y: {
                display: false,

            }
        },
        plugins: {
            legend: {
                position: 'bottom', // Leyenda en la parte inferior
                labels: {
                    boxWidth: 17, // Ajustar el tamaño de los cuadros de la leyenda
                    padding: 30, // Espacio entre la leyenda y el gráfico
                    font: {
                        size: 13, // Ajusta el tamaño de la fuente de la leyenda
                    },
                },
                align: 'start', // Alinea la leyenda al inicio (para que esté en vertical)

            }
        }
    }
});








