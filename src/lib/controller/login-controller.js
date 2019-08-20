// NOTA: Instalar el LIVE SERVER para usar puerto
import { signInWithEmailAndPassword, signInGoogle, signInFacebook } from '../model/modelFirebase.js';
import { db } from '../../main.js'
//creando una funcion que guarde los datos del google y facebook en la bd
export const guardandoDatosGF = (id, name, email, foto) => {
  db.collection('users').doc(id).set({ // agrega datos en la colección
    ID: id,
    Nombre: name,
    Email: email,
    Foto: foto
  });
};
// ---------------------------------------------------------------------//
// AUTENTICACIÓN CON CUALQUIER OTRA CUENTA
// ---------------------------------------------------------------------//
export const loginFunction = (email, pass, mensajeError) => {
  signInWithEmailAndPassword(email, pass).
    then(() => {
      console.log(email);
      // console.log(result);
      window.location.hash = '#/home';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // alert(`Error detectado: ${errorMessage}, Tipo:${errorCode}`);
      console.log('Detectado un error:', error, errorMessage);
      switch (errorCode) {
        case 'auth/user-not-found':
          mensajeError.innerHTML = '*Usuario no registrado. Por favor, registrarse.';
          break;
        case 'auth/wrong-password':
          mensajeError.innerHTML = '*La contraseña es incorrecta.';
          break;
        case 'auth/invalid-email':
          mensajeError.innerHTML = '*El formato del correo ingresado no es válido, verifica e intente de nuevo.';
          break;
        default:
          mensajeError.innerHTML = 'Se ha producido un error';
      }

    });
};
// ---------------------------------------------------------------------//
// AUTENTICACIÓN CON GOOGLE EN FIREBASE
// ---------------------------------------------------------------------//
export const authAccountGoogle = () => {
  signInGoogle()
    .then((resultado) => {
      const user = resultado.user;
      const token = resultado.credential.accessToken;
      guardandoDatosGF(user.uid,user.displayName,user.email,user.photoURL);
      window.location.hash = '#/home';
      console.log('autenticado usuario ', resultado.user, user, token);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error detectado: ${errorMessage}, Tipo:${errorCode}`);
      console.log('Detectado un error:', error);
    });
};
// ---------------------------------------------------------------------//
// AUTENTICACIÓN CON FACEBOOK EN FIREBASE
// ---------------------------------------------------------------------//
export const authAccountFacebook = () => {
  signInFacebook()
    .then((result) => {
      const user = result.user;
      const token = result.credential.accessToken;
      guardandoDatosGF(user.uid,user.displayName,user.email,user.photoURL);
      window.location.hash = '#/home';
      console.log('autenticado usuario ', result.user, user, token);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error detectado: ${errorMessage}, Tipo:${errorCode}`);
      console.log('Detectado un error:', error);
    });
};
// Mostrar constraseña ojo
export const mostrarPassword = () => {
  const pass = document.querySelector('#txt-password');
  if (pass.type === 'password') {
    pass.type = 'text';
  } else {
    pass.type = 'password';
  }
};