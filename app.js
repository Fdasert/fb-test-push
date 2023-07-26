// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkf_MYhqBe2lqg3JRIOJGIxJAaKTEyvvk",
  authDomain: "ajaxtest-25f23.firebaseapp.com",
  databaseURL: "https://ajaxtest-25f23-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ajaxtest-25f23",
  storageBucket: "ajaxtest-25f23.appspot.com",
  messagingSenderId: "880977893229",
  appId: "1:880977893229:web:03a025f45755bd96732c64",
  measurementId: "G-VM1K8F2DLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);