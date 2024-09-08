// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAczgs7XfBkTB5NubLXPa4wRQ5xcaGddvc",
  authDomain: "fir-offical.firebaseapp.com",
  projectId: "fir-offical",
  storageBucket: "fir-offical.appspot.com",
  messagingSenderId: "947728221338",
  appId: "1:947728221338:web:d4ae7dbad7e2e49e174b23",
  measurementId: "G-45YRH5Q162"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig