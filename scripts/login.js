document.getElementById("iniciarSesionBoton").addEventListener("click", function () {
    event.preventDefault();
    window.location.href = 'index.html';
});

//AL CARGAR LA PAGINA ANIMAR MODAL
document.getElementById("containerLogin").classList.add("animarModal");