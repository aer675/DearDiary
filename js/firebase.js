// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


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
