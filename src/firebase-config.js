import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALbvBJvChYxDNC9Lb649PYQGD57hR8h-A",
  authDomain: "blog-application-15b3c.firebaseapp.com",
  projectId: "blog-application-15b3c",
  storageBucket: "blog-application-15b3c.appspot.com",
  messagingSenderId: "1037365425331",
  appId: "1:1037365425331:web:5c71e7aa4a165e6c61acc6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
