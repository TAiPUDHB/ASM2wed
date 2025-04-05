function togglePassword() {
    var input = document.getElementById("password");
    input.type = input.type === "password" ? "text" : "password";
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");
    
    var userData = localStorage.getItem(email);
    
    if (userData) {
        var user = JSON.parse(userData);
        if (user.password === password) {
            alert("Login successful!");
            window.location.href = "index.html";
            return;
        }
    } else {
        // If the account doesn't exist, create a new one in localStorage
        var newUser = { email: email, password: password };
        localStorage.setItem(email, JSON.stringify(newUser));
        alert("New account created and login successful!");
        window.location.href = "index.html";
        return;
    }

    errorMessage.style.display = "block";
});
