// cart.js

// Initialize cart if not already set in localStorage
if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
}

// Function to add item to the cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let itemIndex = cart.findIndex(item => item.name === product.name);

    if (itemIndex > -1) {
        cart[itemIndex].quantity += 1; // Increase quantity if item exists
    } else {
        cart.push({ ...product, quantity: 1 }); // Add new item
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} has been added to the cart!`);
}

// Function to render cart items on the cart page
function renderCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    const cartItemsContainer = document.getElementById("cart-items");

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach((item, index) => {
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <h5>${item.name}</h5>
                <p>Price: $${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    updateTotal();
}

// Function to update total price
function updateTotal() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById("total-price").textContent = `Total: $${total}`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}
