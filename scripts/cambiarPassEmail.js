//VOLVER AL LOGIN
document.getElementById("flechaVolver").addEventListener("click", function () {
    event.preventDefault();
    window.location.href = 'login.html';
});


//AVANZAR A CAMBIAR LA CONTRASEÑA
document.getElementById("cambiarPassBoton").addEventListener("click", function () {
    event.preventDefault();
    window.location.href = 'nuevaContraseña.html';
});

