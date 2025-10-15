// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAod5Y-crH_w4kwkfyGXDRBsAKWV80_ouE",
    authDomain: "pruebfirebase-80a02.firebaseapp.com",
    databaseURL: "https://pruebfirebase-80a02-default-rtdb.firebaseio.com/",
    projectId: "pruebfirebase-80a02",
    storageBucket: "pruebfirebase-80a02.firebasestorage.app",
    messagingSenderId: "437289219569",
    appId: "1:437289219569:web:c54fa5f45f10bc20568050",
    measurementId: "G-3LL77RKVKV",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, auth, storage, db };
