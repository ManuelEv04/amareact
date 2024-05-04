// Configurar Stripe con tu clave pública
var stripe = Stripe('TU_CLAVE_PUBLICA');

// Crear un elemento de tarjeta de crédito de Stripe
var elements = stripe.elements();
var cardElement = elements.create('card');

// Montar el elemento de tarjeta en el formulario
cardElement.mount('#card-element');

var cardErrors = document.getElementById('card-errors');
var form = document.getElementById('payment-form');
alert("'card number: '4242424242424242', 'expiracion: 12/25', 'cvc: 123', 'postcode: 760000'");
window.location.href = 'confirmacion.html'

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los detalles de la tarjeta directamente desde el archivo JSON
    fetch('datos_pago.json')
        .then(response => response.json())
        .then(datosPago => {
            // Crear el token de pago con los detalles de la tarjeta
            return stripe.createToken(cardElement, {
                card: {
                    number: datosPago.numero,
                    exp_month: datosPago.expiracion.split('/')[0],
                    exp_year: datosPago.expiracion.split('/')[1],
                    cvc: datosPago.cvc
                }
            });
        })
        .then(function(result) {
            if (result.error) {
                cardErrors.textContent = result.error.message;
                window.location.href = 'confirmacion.html';
            } else {
                // Enviar el token de pago al servidor
                window.location.href = 'confirmacion.html';
                fetch('/procesar-pago', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ token: result.token.id })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        window.location.href = 'confirmacion.html';
                    } else {
                        // Mostrar un mensaje de error al usuario
                        cardErrors.textContent = data.error;
                        window.location.href = 'confirmacion.html';
                    }
                });
            }
        })
        .catch(error => {
            console.error('Error al procesar el pago:', error);
            window.location.href = 'confirmacion.html';
        });
});