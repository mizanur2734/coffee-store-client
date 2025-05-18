import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMEGtD8ORoMgiEdTr6SJuHnF-24-S8gqw",
  authDomain: "coffee-store-app-137ed.firebaseapp.com",
  projectId: "coffee-store-app-137ed",
  storageBucket: "coffee-store-app-137ed.firebasestorage.app",
  messagingSenderId: "208927476045",
  appId: "1:208927476045:web:74d0afc8c99fce996c4f04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
