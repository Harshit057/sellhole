// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Sticky Navbar on Scroll
window.onscroll = function() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollX > 50) {
        navbar.classList.add("sticky-nav");
    } else {
        navbar.classList.remove("sticky-nav");
    }
};

// Hover Animation for Product Cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseover', function() {
        card.classList.add('hover-animation');
    });
    card.addEventListener('mouseout', function() {
        card.classList.remove('hover-animation');
    });
});

// Newsletter Email Validation
document.querySelector('.newsletter form').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = document.querySelector('.newsletter input[type="email"]');
    const emailValue = emailInput.value.trim();
    if (validateEmail(emailValue)) {
        alert("Thank you for subscribing!");
        emailInput.value = ""; // Clear the input field
    } else {
        alert("Please enter a valid email address.");
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Lazy Load Images for Better Performance
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll("img");
    lazyImages.forEach(img => {
        img.setAttribute("loading", "lazy");
    });
});

// Object to store cart items and their quantities
const cart = {};

// Initialize Add to Cart functionality for all buttons
function initializeCartButtons() {
    // Find all Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        const productId = button.dataset.productId;
        const productName = button.dataset.productName;
        const productPrice = button.dataset.productPrice;
        const productImage = button.dataset.productImage;

        // Add click event for Add to Cart
        button.addEventListener('click', () => {
            addToCart(productId, productName, productPrice, productImage);
        });
    });

    // Find all quantity increase/decrease buttons
    const increaseButtons = document.querySelectorAll('.increase-btn');
    const decreaseButtons = document.querySelectorAll('.decrease-btn');

    increaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            changeQuantity(button.dataset.productId, 1);
        });
    });

    decreaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            changeQuantity(button.dataset.productId, -1);
        });
    });
}

// Add product to cart or update its quantity
function addToCart(productId, productName, productPrice, productImage) {
    if (!cart[productId]) {
        cart[productId] = {
            name: productName,
            price: parseFloat(productPrice),
            image: productImage,
            quantity: 1
        };
    } else {
        cart[productId].quantity += 1;
    }
    updateButtonState(productId);
    updateCartPage();
}

// Increase or decrease quantity
function changeQuantity(productId, delta) {
    if (cart[productId]) {
        cart[productId].quantity += delta;

        if (cart[productId].quantity <= 0) {
            delete cart[productId];
        }
    }
    updateButtonState(productId);
    updateCartPage();
}

// Update button and quantity display for a product
function updateButtonState(productId) {
    const addToCartButton = document.querySelector(`.add-to-cart-btn[data-product-id="${productId}"]`);
    const quantityContainer = document.querySelector(`.quantity-container[data-product-id="${productId}"]`);

    if (cart[productId] && cart[productId].quantity > 0) {
        addToCartButton.style.display = 'none';
        quantityContainer.style.display = 'inline-flex';
        quantityContainer.querySelector('.quantity-display').textContent = cart[productId].quantity;
    } else {
        addToCartButton.style.display = 'block';
        quantityContainer.style.display = 'none';
    }
}

// Update cart page dynamically
function updateCartPage() {
    const cartContainer = document.getElementById('cart-items-container');
    if (cartContainer) {
        cartContainer.innerHTML = '';

        Object.keys(cart).forEach(productId => {
            const item = cart[productId];
            const cartItemHTML = `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <h5>${item.name}</h5>
                        <p>Price: $${item.price.toFixed(2)}</p>
                        <div class="quantity-control">
                            <button class="decrease-btn" data-product-id="${productId}" onclick="changeQuantity('${productId}', -1)">-</button>
                            <span class="quantity-display">${item.quantity}</span>
                            <button class="increase-btn" data-product-id="${productId}" onclick="changeQuantity('${productId}', 1)">+</button>
                        </div>
                    </div>
                </div>
            `;
            cartContainer.innerHTML += cartItemHTML;
        });
    }
}

// Initialize the script on page load
document.addEventListener('DOMContentLoaded', initializeCartButtons);
