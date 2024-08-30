  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDIsRl9duw4T9PqHeuHte0fuhfGdAT7gAc",
    authDomain: "unity-services-e40a0.firebaseapp.com",
    projectId: "unity-services-e40a0",
    storageBucket: "unity-services-e40a0.appspot.com",
    messagingSenderId: "1073365194098",
    appId: "1:1073365194098:web:63a033a7130afa37f9f9eb",
    measurementId: "G-6GNM82QT0T"
  };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);  // Initialize Firebase Authentication

    // Export the Firebase objects to make them accessible in other files
    export { app, analytics, auth };