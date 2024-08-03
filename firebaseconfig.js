
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD9sKFQUcMXIM6O5fiOl7uOGTskibHRcBE",
    authDomain: "fir-authentication-708bb.firebaseapp.com",
    projectId: "fir-authentication-708bb",
    storageBucket: "fir-authentication-708bb.appspot.com",
    messagingSenderId: "183611195060",
    appId: "1:183611195060:web:94f5496d5e2f17942421e1",
    measurementId: "G-CREG37JSHK"
  };


  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
