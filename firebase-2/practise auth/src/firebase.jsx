// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwD4tu0ktxD6PXHLnbQO3GegzROOJkUr4",
  authDomain: "practise1-95d88.firebaseapp.com",
  projectId: "practise1-95d88",
  storageBucket: "practise1-95d88.appspot.com",
  messagingSenderId: "418728261502",
  appId: "1:418728261502:web:5402866ec7b38abc26652f",
  measurementId: "G-REYRHRQGQR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);