document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (!user) {
        alert('You are not logged in!');
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('welcome-message').textContent = `Welcome, ${user.name}!`;

    document.getElementById('logout').addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        alert('Logged out successfully!');
        window.location.href = 'login.html';
    });
});
