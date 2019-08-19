// NOTA: Instalar el LIVE SERVER para usar puerto
import { signInWithEmailAndPassword, signInGoogle, signInFacebook } from '../model/modelFirebase.js';
// ---------------------------------------------------------------------//
// AUTENTICACIÓN CON CUALQUIER OTRA CUENTA
// ---------------------------------------------------------------------//
export const loginFunction = (email, pass, mensajeError) => {
  signInWithEmailAndPassword(email, pass).then((result) => {
      window.location.hash = '#/home';
      console.log('autenticado usuario ');
      console.log(result);
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
  // promise.catch(evento => console.log(evento.message));
};
// ---------------------------------------------------------------------//
// AUTENTICACIÓN CON GOOGLE EN FIREBASE
// ---------------------------------------------------------------------//
export const authAccountGoogle = () => {
  signInGoogle()
    .then((result) => {
      const user = result.user;
      const token = result.credential.accessToken;
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
// ---------------------------------------------------------------------//
// AUTENTICACIÓN CON FACEBOOK EN FIREBASE
// ---------------------------------------------------------------------//
export const authAccountFacebook = () => {
  signInFacebook()
    .then((result) => {
      const user = result.user;
      const token = result.credential.accessToken;
      window.location.hash = '#/home';
      // todo correcto
      console.log('autenticado usuario ', result.user, user, token);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error detectado: ${errorMessage}, Tipo:${errorCode}`);
      console.log('Detectado un error:', error);
    });
};
