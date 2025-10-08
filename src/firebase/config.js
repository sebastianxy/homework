
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAod5Y-crH_w4kwkfyGXDRBsAKWV80_ouE",
  authDomain: "pruebfirebase-80a02.firebaseapp.com",
  projectId: "pruebfirebase-80a02",
  storageBucket: "pruebfirebase-80a02.firebasestorage.app",
  messagingSenderId: "437289219569",
  appId: "1:437289219569:web:c54fa5f45f10bc20568050",
  measurementId: "G-3LL77RKVKV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Proveedor de Google
const googleProvider = new GoogleAuthProvider();

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  googleProvider,
  signInWithPopup,
  onAuthStateChanged,
};
