
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaQDkT01PzEHk7CQfVo0L7bVaGEsAgfD8",
  authDomain: "basic-tutorial-fc27e.firebaseapp.com",
  projectId: "basic-tutorial-fc27e",
  storageBucket: "basic-tutorial-fc27e.appspot.com",
  messagingSenderId: "110999057605",
  appId: "1:110999057605:web:6d2b9a16f2c6997b766cac",
  databaseURL: "https://basic-tutorial-fc27e-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);