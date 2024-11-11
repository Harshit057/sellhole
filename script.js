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
