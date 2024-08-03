import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  createUserWithEmailAndPassword(  auth , email.value, password.value )
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});

const firebaseConfig = {
  apiKey: "AIzaSyD9sKFQUcMXIM6O5fiOl7uOGTskibHRcBE",
  authDomain: "fir-authentication-708bb.firebaseapp.com",
  projectId: "fir-authentication-708bb",
  storageBucket: "fir-authentication-708bb.appspot.com",
  messagingSenderId: "183611195060",
  appId: "1:183611195060:web:94f5496d5e2f17942421e1",
  measurementId: "G-CREG37JSHK"
};





export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);