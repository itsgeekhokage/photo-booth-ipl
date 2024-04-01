import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRL2Kb9rLZl2W2xQhv1PiR34VmTuBsuWA",
  authDomain: "garnieraivideobooth.firebaseapp.com",
  projectId: "garnieraivideobooth",
  storageBucket: "garnieraivideobooth.appspot.com",
  messagingSenderId: "1041187261722",
  appId: "1:1041187261722:web:9317298b0d603b0764f0a3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storagedb = getStorage(app);
