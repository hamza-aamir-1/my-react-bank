// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5Ms-wtYLO5rDMBTjwpFT_pIHx3nsJhoQ",
  authDomain: "my-react-bank-hamza.firebaseapp.com",
  projectId: "my-react-bank-hamza",
  storageBucket: "my-react-bank-hamza.appspot.com",
  messagingSenderId: "861204300307",
  appId: "1:861204300307:web:bfd3ff64cc5fe3f28835e6",
  measurementId: "G-4PSJWTC2KX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);