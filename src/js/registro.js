document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-registrarse').addEventListener('click', function() {
        

        var registroExitoso = true;

        if (registroExitoso) {
            alert('registro exitoso.');
            window.location.href = 'login.html';
        } else {

            alert('Error en el registro. Inténtalo de nuevo.');
        }
    });
});