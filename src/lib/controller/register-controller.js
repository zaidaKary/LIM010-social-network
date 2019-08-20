// import { createUserWithEmailAndPassword } from '../model/modelRegisterFirebase.js';
// import { guardarRegistro } from '../model/modelguardarRegistro.js';
import { db } from './../../main.js';
import {userCurrent,createUser} from '../model/modelLoginFirebase.js';
// ---------------------------------------------------------------------//
// REGISTRO DE UN NUEVO USUARIO
// ---------------------------------------------------------------------//
const createProfile = (id, name, email) => {
  db.collection('users').doc(id).set({
    name, email
  });
  const user = userCurrent();

  user.updateProfile({
    displayName: name,
  });
};

export const getName = (userName) => {
  const user = userCurrent().uid;
  db.collection('users').doc(user).get().then((doc) => {
    if (doc.exists) {
      console.log('Document data:', doc.data().name);
      userName.textContent = doc.data().name;
    } else {
      doc.data()

    }
  })
    .catch(() => {
      console.log('Error getting document:', error);
    });
};

export const registerFunction = (email, pass, mensajeError) => {
  // Validando datos del email y password
  // validar(email, pass);
  createUser(email, pass,foto)
  .then(() => {
    const use = userCurrent();
    createProfile(use,name,email);
    getName(user.uid);
    window.location.hash = '#/';
    // guardarRegistro(username, foto, email);
    // console.log(result);
    // alert('Usuario creado correctamente');
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // alert(`Error detectado: ${errorMessage}, Tipo:${errorCode}`);
      console.log('Detectado un error:', error, errorMessage);
      switch (errorCode) {
        case 'auth/email-already-in-use':
          mensajeError.innerHTML = '*La dirección de correo electrónico ya existe.';
          break;
        case 'auth/weak-password':
          mensajeError.innerHTML = '*La contraseña debe tener al menos 6 caracteres.';
          break;
        case 'auth/invalid-email':
          mensajeError.innerHTML = '*El formato del correo ingresado no es válido, verifica e intente de nuevo.';
          break;
        default:
          mensajeError.innerHTML = 'Se ha producido un error';
      }
    });
};
