// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBe5uUKF_-EA1xuBPfcNvCjcwy3rCUtYu0",
    authDomain: "router-firebase-integrat-87232.firebaseapp.com",
    projectId: "router-firebase-integrat-87232",
    storageBucket: "router-firebase-integrat-87232.appspot.com",
    messagingSenderId: "116263005460",
    appId: "1:116263005460:web:e577978be54ded9d3da601",
    measurementId: "G-YVEZZD02HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;