import { auth, db } from "./firebase.js";

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    doc,
    setDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



const errorMessage = document.getElementById("errorMessage");



/* LOGIN */

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function(e)
{

    e.preventDefault();

    const email = document.getElementById("username").value;

    const password = document.getElementById("password").value;



    if(email === "" || password === "")
    {
        errorMessage.textContent = "All fields required.";
        return;
    }



    try
    {

        await signInWithEmailAndPassword(auth, email, password);

        alert("Welcome back.");

        window.location.href = "hub.html";

    }

    catch(error)
    {

        errorMessage.textContent = error.message;

    }


});




/* SIGNUP */

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async function(e)
{

    e.preventDefault();

    const username = document.getElementById("signupUsername").value;

    const email = document.getElementById("signupEmail").value;

    const password = document.getElementById("signupPassword").value;

    const dob = document.getElementById("signupDOB").value;



    if(username === "" || email === "" || password === "" || dob === "")
    {

        alert("All fields required.");

        return;

    }



    try
    {

        const userCredential =
        await createUserWithEmailAndPassword(auth, email, password);


        const user = userCredential.user;



        await setDoc(doc(db, "users", user.uid),
        {

            username: username,

            email: email,

            dob: dob

        });



        alert("Account created successfully.");

    }


    catch(error)
    {

        alert(error.message);

    }


});




/* SWITCH LOGIN / SIGNUP */

function toggleForm()
{

    const login = document.getElementById("loginForm");

    const signup = document.getElementById("signupForm");

    const label = document.getElementById("switchLabel");



    if(login.classList.contains("hidden"))
    {

        login.classList.remove("hidden");

        signup.classList.add("hidden");

        label.innerText = "New to Writers of Dear Diary?";

    }

    else
    {

        login.classList.add("hidden");

        signup.classList.remove("hidden");

        label.innerText = "Already a writer?";

    }

}
