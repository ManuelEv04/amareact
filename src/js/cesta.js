const cartList = document.getElementById('cart-list');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');

const products = document.querySelectorAll('.product');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

let cart = [];

addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const product = products[index];
        const productName = product.querySelector('h3').textContent;
        const productPrice = parseFloat(product.querySelector('.price').textContent.slice(1));
        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

checkoutButton.addEventListener('click', () => {
    alert('Procesando el pago. confirmar pedido');
    window.location.href = 'pago.html';
    cart = [];
    updateCart();
});

function updateCart() {
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}
