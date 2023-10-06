// Initialize the cart as an empty array
let cart = [];

// Function to add an item to the cart
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

// Function to update the cart's visual representation
function updateCart() {
    // Get the cart element from the page
    const cartElement = document.querySelector('.cart-items');

    // Clear the cart element
    cartElement.innerHTML = '';

    // Loop through each item in the cart and create a cart item element
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price.toFixed(2)}</p>
        `;
        cartElement.appendChild(cartItemElement);
    });

    // Calculate and update the total price
    const cartTotal = calculateTotal();
    const cartTotalElement = document.getElementById('cartTotal');
    cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
}

// Function to calculate the total price of items in the cart
function calculateTotal() {
    let total = 0;
    for (const item of cart) {
        total += item.price;
    }
    return total;
}

// Add event listeners to all "Add to Cart" buttons on the page
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        const productPrice = parseFloat(button.getAttribute('data-price'));
        addToCart(productName, productPrice);
    });
});