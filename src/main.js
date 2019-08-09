/* Se crea este main.js porque se va a ejecutar cuando se 
inicialice la página, es decir, cuando 
se haga una recarga de nuestra página */
import { changeView } from './ruteo/index.js'

const init = () => { // sirve para cambiar la url
  changeView(window.location.hash)
  window.addEventListener('hashchange', () => changeView(window.location.hash));//hash -> para que nos traiga despues del #
};

window.addEventListener('load', () => {
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
  init();
}); // cada vez que haya una recarga (load) se ejecuta esta funcion

