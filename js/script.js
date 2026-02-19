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


function toggleForm()
{

const login = document.getElementById("loginForm");

const signup = document.getElementById("signupForm");

const label = document.getElementById("switchLabel");



if(login.classList.contains("hidden"))
{

login.classList.remove("hidden");

signup.classList.add("hidden");

label.innerText="New to Writers of Dear Diary?";

}

else
{

login.classList.add("hidden");

signup.classList.remove("hidden");

label.innerText="Already a writer?";

}

}

document.querySelectorAll(".auth-form").forEach(form =>
{

form.addEventListener("submit", function(e)
{

e.preventDefault();

const username = form.querySelector("input[type=text]").value;

localStorage.setItem("dd_user", username);

window.location.href="hub.html";

});

});
