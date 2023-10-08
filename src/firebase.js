import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXgnn5x6OOcc8tgDYi8_UEnjLVTKNwDH8",
  authDomain: "ecommerce-514fd.firebaseapp.com",
  projectId: "ecommerce-514fd",
  storageBucket: "ecommerce-514fd.appspot.com",
  messagingSenderId: "944833021142",
  appId: "1:944833021142:web:ab31458432685e91bcb577",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// export
export const auth = app.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
