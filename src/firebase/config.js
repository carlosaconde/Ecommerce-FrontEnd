// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2FJcsdpA9-SWf5SrfR9iRO0Ow6qSPv5A",
  authDomain: "tienda-kurama.firebaseapp.com",
  projectId: "tienda-kurama",
  storageBucket: "tienda-kurama.appspot.com",
  messagingSenderId: "652028003217",
  appId: "1:652028003217:web:37d04780529d60260e9030"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);
