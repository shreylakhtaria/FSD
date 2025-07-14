function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    if (userDetails && userDetails.email === email && userDetails.password === password) {
        alert('Login successful!');
        window.location.href = 'home.html';
    } else {
        alert('Invalid email or password!');
    }
}