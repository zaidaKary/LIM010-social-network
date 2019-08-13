//Inicia la configuracion de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAw54jrErsVrWC2Em_kzD3ydeTogwQblVY",
    authDomain: "pruebaredsocial-7ac42.firebaseapp.com",
    databaseURL: "https://pruebaredsocial-7ac42.firebaseio.com",
    projectId: "pruebaredsocial-7ac42",
    storageBucket: "pruebaredsocial-7ac42.appspot.com",
    messagingSenderId: "542825444526",
    appId: "1:542825444526:web:14136e0ecce0ff1b"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;