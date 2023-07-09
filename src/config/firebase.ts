// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAWUn5KjPFRpaqhfsnX863OlI0u6UhAGE",
  authDomain: "react-social-media-36107.firebaseapp.com",
  projectId: "react-social-media-36107",
  storageBucket: "react-social-media-36107.appspot.com",
  messagingSenderId: "677601470374",
  appId: "1:677601470374:web:3dba0a6fbe772044ac1167"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();