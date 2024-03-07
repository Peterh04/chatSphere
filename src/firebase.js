import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD_A_L3EaQhJy7xLVs_Vh4LFgYyjZ6GOQs",
  authDomain: "chat-7ecd0.firebaseapp.com",
  projectId: "chat-7ecd0",
  storageBucket: "chat-7ecd0.appspot.com",
  messagingSenderId: "132152725974",
  appId: "1:132152725974:web:b9e4ca46573bcfdeeb5477"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()
