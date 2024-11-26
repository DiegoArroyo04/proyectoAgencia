document.addEventListener("DOMContentLoaded", function () {
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
});