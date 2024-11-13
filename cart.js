// cart.js

// Initialize cart from localStorage or start with an empty cart
let cart = JSON.parse(localStorage.getItem("cart")) || {};

// Function to render items in the cart
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    let total = 0;
    for (const [productId, item] of Object.entries(cart)) {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        // Render each cart item as a card with image, name, and quantity controls
        cartItemsContainer.innerHTML += `
            <div class="cart-item card mb-3">
                <div class="row no-gutters align-items-center">
                    <div class="col-md-2">
                        <img src="${item.image}" class="card-img" alt="${item.name}">
                    </div>
                    <div class="col-md-4">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">$${item.price}</p>
                        </div>
                    </div>
                    <div class="col-md-3 text-center">
                        <div class="quantity-controls">
                            <button class="btn btn-secondary" onclick="decreaseQuantity('${productId}')">-</button>
                            <span class="mx-2">${item.quantity}</span>
                            <button class="btn btn-secondary" onclick="increaseQuantity('${productId}')">+</button>
                        </div>
                    </div>
                    <div class="col-md-3 text-right">
                        <p class="card-text"><strong>$${itemTotal}</strong></p>
                    </div>
                </div>
            </div>
        `;
    }

    document.getElementById("total-price").textContent = `Total: $${total}`;
}

// Function to update localStorage and re-render cart
function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// Increase item quantity
function increaseQuantity(productId) {
    cart[productId].quantity += 1;
    updateCart();
}

// Decrease item quantity
function decreaseQuantity(productId) {
    if (cart[productId].quantity > 1) {
        cart[productId].quantity -= 1;
    } else {
        delete cart[productId];
    }
    updateCart();
}

// Add item to cart or show quantity selector
function addToCart(productId, productName, productPrice, productImage) {
    if (!cart[productId]) {
        cart[productId] = {
            name: productName,
            price: productPrice,
            quantity: 1,
            image: productImage
        };
    }

    // Transform button to quantity controls on the product page
    const buttonContainer = document.getElementById(`button-${productId}`);
    buttonContainer.innerHTML = `
        <button class="btn btn-secondary" onclick="decreaseQuantity('${productId}')">-</button>
        <span class="mx-2">${cart[productId].quantity}</span>
        <button class="btn btn-secondary" onclick="increaseQuantity('${productId}')">+</button>
    `;

    updateCart();
}

// Call renderCart on page load to populate cart data if it exists
document.addEventListener("DOMContentLoaded", renderCart);
