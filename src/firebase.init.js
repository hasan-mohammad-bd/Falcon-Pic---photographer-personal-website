// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsWE25fMdonCh5Sf6GIjYxyvz8ptBbQU4",
  authDomain: "photography-web-app-58ab5.firebaseapp.com",
  projectId: "photography-web-app-58ab5",
  storageBucket: "photography-web-app-58ab5.appspot.com",
  messagingSenderId: "110121270562",
  appId: "1:110121270562:web:e231dd2b42a0b69a31f97b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;