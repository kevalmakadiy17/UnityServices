import { app, auth } from "./firebase.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

const registerForm = document.querySelector('#register-form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting normally

    const emailInput = document.querySelector('#register-email'); 
    const passwordInput = document.querySelector('#register-password'); 

    const email = emailInput.value;
    const password = passwordInput.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Handle successful registration
            const user = userCredential.user;
            console.log('Registered user:', user);
            wrapper.classList.remove('active'); // Hide the popup after successful registration
            // Jump to profile page
            window.location.href = 'profile.html';
        })
        .catch((error) => {
            // Handle registration error
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Registration error:', errorCode, errorMessage);
        });
});

loginLink.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    wrapper.classList.remove('active');
});

const loginForm = document.querySelector('#login-form'); 

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting normally

    const emailInput = document.querySelector('#login-email'); 
    const passwordInput = document.querySelector('#login-password'); 

    const email = emailInput.value;
    const password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Handle successful login
            const user = userCredential.user;
            console.log('Logged in user:', user);
            wrapper.classList.remove('active-popup'); // Hide the popup after successful login
            // Jump to profile page
            window.location.href = 'profile.html';
        })
        .catch((error) => {
            // Handle login error
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Login error:', errorCode, errorMessage);
        });
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
