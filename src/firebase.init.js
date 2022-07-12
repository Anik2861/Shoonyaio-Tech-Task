// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAvlmjpCSc2vxbl7-923a4fE22Tc-GR1Q",
  authDomain: "jobtask-456b3.firebaseapp.com",
  projectId: "jobtask-456b3",
  storageBucket: "jobtask-456b3.appspot.com",
  messagingSenderId: "995428484696",
  appId: "1:995428484696:web:1f4a31f409d6f240812c2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
