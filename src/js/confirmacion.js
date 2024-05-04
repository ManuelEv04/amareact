function mostrarConfirmacion() {
    var modal = document.getElementById('modal');
    var overlay = document.getElementById('overlay');

    modal.style.display = 'block';
    overlay.style.display = 'block';
}

function cerrarModal() {
    var modal = document.getElementById('modal');
    var overlay = document.getElementById('overlay');

    modal.style.display = 'none';
    overlay.style.display = 'none';

    window.location.href = 'notificacion.html';
}
