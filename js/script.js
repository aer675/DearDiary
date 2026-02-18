const form = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        errorMessage.textContent = "All fields must be filled.";
        return;
    }

    if (password.length < 4) {
        errorMessage.textContent = "Password too short.";
        return;
    }

    errorMessage.style.color = "#00ff88";
    errorMessage.textContent = "Access granted...";
    
    setTimeout(() => {
        alert("Welcome back, " + username + ".");
    }, 800);
});
