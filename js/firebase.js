// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// YOUR CONFIG
const firebaseConfig = {
    apiKey: "AIzaSyAMi4owvTE6Ivd0oE9w_6NkhJbuwNwzk5M",
    authDomain: "dear-diary-75535.firebaseapp.com",
    projectId: "dear-diary-75535",
    storageBucket: "dear-diary-75535.appspot.com",
    messagingSenderId: "253273358883",
    appId: "1:253273358883:web:971bc0ff9c73449d1ca796"
};

// Initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Make global
window.auth = auth;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;

// ============================
// SIGN UP
// ============================
document.getElementById("signupForm").addEventListener("submit", function(e){
    e.preventDefault();
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("Account created! You can now log in.");
        // Switches back to the login form automatically
        document.getElementById("loginForm").classList.remove("hidden");
        document.getElementById("signupForm").classList.add("hidden");
        document.getElementById("switchLabel").innerText = "New to Writers of Dear Diary?";
        document.getElementById("switchLink").innerText = "Sign up instead";
    })
    .catch((error) => {
        console.error("Signup Error:", error);
        alert("Sign Up Error: " + error.message);
    });
});

// ============================
// LOGIN
// ============================
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("Welcome back Writer.");
        // Transport to Characters page!
        window.location.href = "world.html"; 
    })
    .catch((error) => {
        console.error("Login Error:", error);
        alert("Wrong email or password! Please try again.");
    });
});