import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyATchvbSvYyXHoQ_PNqTyHnAuZQUxs3dc8",
  authDomain: "ai-video-test-28b14.firebaseapp.com",
  projectId: "ai-video-test-28b14",
  storageBucket: "ai-video-test-28b14.appspot.com",
  messagingSenderId: "621998632535",
  appId: "1:621998632535:web:2d30bf27864bd720963d12"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storagedb = getStorage(app);
