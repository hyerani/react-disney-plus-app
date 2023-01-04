// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"; // 인증 부분
import "firebase/database";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4n-0bwH9Ue3h__9YzEw7AEnF8iCJGgD8",
  authDomain: "react-disney-plus-app-88e6d.firebaseapp.com",
  projectId: "react-disney-plus-app-88e6d",
  storageBucket: "react-disney-plus-app-88e6d.appspot.com",
  messagingSenderId: "1013039227947",
  appId: "1:1013039227947:web:69451da58cd6525e34766e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
