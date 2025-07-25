// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB66cEZTmNHzSc6G92VczBiiyRmNN5uWA0",
  authDomain: "nextjs-firebase-ecommerc-e309a.firebaseapp.com",
  projectId: "nextjs-firebase-ecommerc-e309a",
  storageBucket: "nextjs-firebase-ecommerc-e309a.firebasestorage.app",
  messagingSenderId: "223128890947",
  appId: "1:223128890947:web:5879e520211aa1fde36ef6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firestore
const db = getFirestore(app);

// storage

// authentication

export { db };
