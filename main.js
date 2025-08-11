import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const statusEl = document.getElementById('status');

document.getElementById('registerBtn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            statusEl.textContent = "Registration successful!";
        })
        .catch(error => {
            statusEl.textContent = "Registration error: " + error.message;
        });
});

document.getElementById('loginBtn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            statusEl.textContent = "JOIN";
        })
        .catch(error => {
            statusEl.textContent = "Login error: " + error.message;
        });
});
