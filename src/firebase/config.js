// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxdNimYfBbtEBhCxZIaVlWKmViZGjMXIU",
  authDomain: "quiz-react-fdb36.firebaseapp.com",
  projectId: "quiz-react-fdb36",
  storageBucket: "quiz-react-fdb36.appspot.com",
  messagingSenderId: "440357587448",
  appId: "1:440357587448:web:279ba57b4c6c5e616bae0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};