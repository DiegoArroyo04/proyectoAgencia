
document.getElementById("flechaVolver").addEventListener("click", function () {
    event.preventDefault();
    window.location.href = 'cambiarContraseñaEmail.html';
});


//VOLVER AL LOGIN
document.getElementById("cambiarPassBoton").addEventListener("click", function () {
    event.preventDefault();
    window.location.href = 'login.html';
});

//AL CARGAR LA PAGINA ANIMAR MODAL
document.getElementById("containerCambiarPass").classList.add("animarModal");
