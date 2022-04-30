// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATgh-w4FC-VAcadoLWAlBa9HFizOCkh2o",
  authDomain: "phone-warehouse-side.firebaseapp.com",
  projectId: "phone-warehouse-side",
  storageBucket: "phone-warehouse-side.appspot.com",
  messagingSenderId: "752653309380",
  appId: "1:752653309380:web:322799b73d2ca9dbde8091",
  measurementId: "G-D7XVXCBK16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;