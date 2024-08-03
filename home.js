import {
    signOut,
    onAuthStateChanged,
  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  import { getAuth } from "./firebaseconfig.js";
  
  onAuthStateChanged(getAuth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      window.location = "login.html";
    }
  });
  
  const btn = document.querySelector("#btn");
  
  btn.addEventListener("click", () => {
    signOut(loginapp)
      .then(() => {
        window.location = "login.html";
      })
      .catch((error) => {
        console.log(error);
      });
  });