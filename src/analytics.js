// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmS2kajuUdyT807owf7Wqy30w-kB07zKc",
    authDomain: "briut-ok.firebaseapp.com",
    projectId: "briut-ok",
    storageBucket: "briut-ok.appspot.com",
    messagingSenderId: "809871331507",
    appId: "1:809871331507:web:389cb1d6922278fe9f20c6",
    measurementId: "G-LEWM8GE1HQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {
    app,
    analytics,
    logEvent
}
