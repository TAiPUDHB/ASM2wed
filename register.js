function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!name || !email || !password || !confirmPassword) {
        alert("Please fill in all the required fields!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password confirmation does not match!");
        return;
    }

    // Save the registration info to localStorage
    const user = {
        name: name,
        email: email,
        password: password  // In reality, passwords should not be stored like this
    };
    localStorage.setItem(email, JSON.stringify(user));

    alert("Registration successful! Redirecting...");
    setTimeout(() => {
        window.location.href = "login.html"; // Redirect to login page
    }, 1500);
}
