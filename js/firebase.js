import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";

import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
// import firebase from "firebase/app";
// import "firebase/compat/database";

// import firebase from "firebase/compat/app";
// Import the functions you need from the SDKs you need
// Preloader js
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXUQISjRU8gFybOg7M-HsmyLfHG7iq4Ms",
  authDomain: "optoappgl.firebaseapp.com",
  databaseURL: "https://optoappgl-default-rtdb.firebaseio.com",
  projectId: "optoappgl",
  storageBucket: "optoappgl.appspot.com",
  messagingSenderId: "922150446079",
  appId: "1:922150446079:web:d57f788958a5580fe77dca",
  measurementId: "G-Y9ZMJHBF5M",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase(app);
const mails = ref(database, "subscribers");
//const database = firebase.database();
function subscribe() {
  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value;
  // const database = firebase.database();
  // Verificar que el campo de correo electrónico no esté vacío
  if (email === "") {
    alert("Ingrese un correo electrónico válido");
    return;
  }
  // Guardar el correo electrónico en la base de datos
  push(mails, email);

  // database
  //   .ref("subscribers/")
  //   .set({
  //     email: email,
  //   })
  //   .then(() => {
  //     alert("Correo electrónico registrado exitosamente");
  //     emailInput.value = ""; // Limpiar el campo de texto después de enviar
  //   })
  //   .catch((error) => {
  //     alert("Ocurrió un error al registrar el correo electrónico");
  //     console.log(error);
  //   });
}
export { subscribe };
