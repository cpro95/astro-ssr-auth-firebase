// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB235zMg3UURzgY6PUFN-h2a7MmR_xiwlY",
  authDomain: "mycodings-76f3f.firebaseapp.com",
  projectId: "mycodings-76f3f",
  storageBucket: "mycodings-76f3f.appspot.com",
  messagingSenderId: "922197313597",
  appId: "1:922197313597:web:b19c37b07497b2dd40c254",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// if (import.meta.env.DEV) {
//   connectAuthEmulator(auth, "http://localhost:9099");
// }
