// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBY0px3SYjmlEfeZohf6OdpPCGnaQNoLis",
    authDomain: "code-nest.firebaseapp.com",
    projectId: "code-nest",
    storageBucket: "code-nest.appspot.com",
    messagingSenderId: "563239783964",
    appId: "1:563239783964:web:4c5e34a067b9f8458019d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;