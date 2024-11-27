// Import Firebase modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOl07oA0XTrlkjx0ZP5OIMaIRZfsSuJ28",
    authDomain: "https://console.firebase.google.com/u/0/project/app-5a5e8/settings/general/web:YWI4YzU0ZDEtZGM3Mi00NGU1LWExMjktNWNkMmMzMzdlNWZh",
    projectId: "app-5a5e8",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "1:112171562551:web:888ffe02713456b0d0f1b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        document.getElementById("message").innerText = `Welcome, ${userCredential.user.email}`;
    } catch (error) {
        document.getElementById("message").innerText = `Error: ${error.message}`;
    }
});
