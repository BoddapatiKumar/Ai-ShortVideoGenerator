// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "shortvideogenerator-127a7.firebaseapp.com",
  projectId: "shortvideogenerator-127a7",
  storageBucket: "shortvideogenerator-127a7.firebasestorage.app",
  messagingSenderId: "910730204301",
  appId: "1:910730204301:web:6757693428c3dccf797ec4",
  measurementId: "G-XK4HLVH00Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);