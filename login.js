document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Welcome, ${user.name}!`);
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        alert('Invalid email or password!');
    }
});
