import { getFirestore, collection, getDocs } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDSiyqUt3Ur9oNlGo15YuRFQ4MREz44-Q",
    authDomain: "curso-coder-react-fbd88.firebaseapp.com",
    projectId: "curso-coder-react-fbd88",
    storageBucket: "curso-coder-react-fbd88.appspot.com",
    messagingSenderId: "188262917189",
    appId: "1:188262917189:web:eac5c7e9d66df01a642f2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const DB = getFirestore(app);