import { createUserWithEmailAndPassword, userCurrent, createUser } from '../model/modelLoginRegistro.js';

export const registerFunction = (email, pass, mensajeError, username, foto) => {
  createUserWithEmailAndPassword(email, pass)
    .then((result) => {
      const user = userCurrent();// obtiene el usuario que accedió
      createUser(user.uid, username, email, foto);// creamos el usuario en firebase
      window.location.hash = '#/';
      console.log(result);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
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