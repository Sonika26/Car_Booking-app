import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnO5iDjt5SzvQn0k0PTZqBNgfjHov-TQg",
  authDomain: "rentroo-app.firebaseapp.com",
  projectId: "rentroo-app",
  storageBucket: "rentroo-app.firebasestorage.app",
  messagingSenderId: "787334926011",
  appId: "1:787334926011:web:5c33b01060ec8afc8d639e",
  measurementId: "G-KDWCE2YD2F"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);