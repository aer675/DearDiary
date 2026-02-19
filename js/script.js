// Toggle between Login and Sign Up forms
function toggleForm() {
    const login = document.getElementById("loginForm");
    const signup = document.getElementById("signupForm");
    const label = document.getElementById("switchLabel");
    const link = document.getElementById("switchLink");
    const errorMessage = document.getElementById("errorMessage");

    // Clear any existing error messages when switching
    errorMessage.textContent = "";

    if (login.classList.contains("hidden")) {
        // Show Login
        login.classList.remove("hidden");
        signup.classList.add("hidden");
        label.innerText = "New to Writers of Dear Diary?";
        link.innerText = "Sign up instead";
    } else {
        // Show Sign Up
        login.classList.add("hidden");
        signup.classList.remove("hidden");
        label.innerText = "Already a writer?";
        link.innerText = "Log in instead";
    }
}

// Handle Form Submissions
document.querySelectorAll(".auth-form").forEach(form => {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const errorMessage = document.getElementById("errorMessage");
        const usernameInput = form.querySelector("input[type=text]");
        const username = usernameInput ? usernameInput.value.trim() : "Writer";

        // Specific validation if it's the login form
        if (form.id === "loginForm") {
            const passwordInput = document.getElementById("password").value.trim();

            if (username === "" || passwordInput === "") {
                errorMessage.style.color = "red";
                errorMessage.textContent = "All fields must be filled.";
                return;
            }

            if (passwordInput.length < 4) {
                errorMessage.style.color = "red";
                errorMessage.textContent = "Password too short.";
                return;
            }

            // Success state
            errorMessage.style.color = "#00ff88";
            errorMessage.textContent = "Access granted...";
            
            setTimeout(() => {
                alert("Welcome back, " + username + ".");
                localStorage.setItem("dd_user", username);
                window.location.href = "hub.html"; // Redirects after the alert
            }, 800);

        } else if (form.id === "signupForm") {
            // Handle Sign up submission
            localStorage.setItem("dd_user", username);
            window.location.href = "hub.html"; // Redirect immediately for sign up
        }
    });
});