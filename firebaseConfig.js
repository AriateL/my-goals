// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config (from console)
const firebaseConfig = {
  apiKey: "AIzaSyBeT9QlRmQMhiYDk79oeIOSlxj8n9WERYQ",
  authDomain: "mygoals-ffb3b.firebaseapp.com",
  projectId: "mygoals-ffb3b",
  storageBucket: "mygoals-ffb3b.firebasestorage.app",
  messagingSenderId: "924433135659",
  appId: "1:924433135659:web:5d75abc271ab727cf7526e",
  measurementId: "G-TVL6XXZEBZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);