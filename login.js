const loginForm = document.getElementById('loginForm');
const errorMessageElement = document.getElementById('errorMessage');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    errorMessageElement.textContent = '';

    if (!username || !password) {
        errorMessageElement.textContent = 'Username and password are required.';
        return;
    }

    const loginData = {
        username: username,
        password: password
    };

    // Make a POST request to the backend API
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            errorMessageElement.textContent = data.message;
        } else {
            window.location.href = '/dashboard.html';
        }
    })
    .catch(error => {
        errorMessageElement.textContent = 'An error occurred. Please try again.';
        console.error('Error:', error);
    });
});