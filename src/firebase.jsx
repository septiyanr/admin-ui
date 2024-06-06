import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-1c04d.firebaseapp.com",
  projectId: "store-tutorial-1c04d",
  storageBucket: "store-tutorial-1c04d.appspot.com",
  messagingSenderId: "135557142226",
  appId: "1:135557142226:web:2bb6d8a2b36bd2454bff0b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();