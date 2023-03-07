// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYBrJhcoi31DXWeURzcLCuPJEMii5RCMQ",
    authDomain: "evs-backendreact.firebaseapp.com",
    projectId: "evs-backendreact",
    storageBucket: "evs-backendreact.appspot.com",
    messagingSenderId: "561208957762",
    appId: "1:561208957762:web:59ad48ecc2e6cd757946db",
    measurementId: "G-6F5SGL24M7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);