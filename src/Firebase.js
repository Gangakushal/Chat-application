import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyByJpAN4dS8Vr086bv-tib6aCr9wIoz6s8",
    authDomain: "chat-app-5132c.firebaseapp.com",
    projectId: "chat-app-5132c",
    storageBucket: "chat-app-5132c.appspot.com",
    messagingSenderId: "958878354010",
    appId: "1:958878354010:web:8d39e1b5ee3f75d708a663",
    measurementId: "G-2S95TSGVYT"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
