import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

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

export const db = getDatabase(app);
export const auth = getAuth(app);

export default app;