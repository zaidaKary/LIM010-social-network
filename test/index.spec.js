import { signInWithEmailAndPassword, signInGoogle, signInFacebook, createUserWithEmailAndPassword, cerrarSesion } from '../src/lib/model/modelFirebase.js';

// configuracion de firebase mock
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockdatabase = new firebasemock.MockFirebase();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
);


// iniciar sesion
describe('iniciar Sesion', () => {
  it('Deberia iniciar sesion', () => signInWithEmailAndPassword('laboratoria@lab.com', '123456789')
    .then((user) => {
      expect(user.email).toBe('laboratoria@lab.com');
    }));
});
// registrar usuario
describe('registro de usuario', () => {
  it('Deberia poder registrarse como usuario', () => createUserWithEmailAndPassword('laboratoria@lab.com', '123456789')
    .then((user) => {
      expect(user.email).toBe('laboratoria@lab.com');
    }));
});
// ingresar con facebook
describe('sesion iniciada ', () => {
  it('Deberia iniciar sesion con facebook', () => signInFacebook()
    .then(() => {
      expect(' ').toBe(' ');
    }));
});
// ingresar con gmail
describe('iniciar sesion con gmail', () => {
  it('Deberia iniciar sesion con facebook ', () => signInGoogle()
    .then(() => {
      expect(' ').toBe(' ');
    }));
});
// deberia cerrar sesion
describe('cerrar sesion', () => {
  it('deberia cerrar sesion', () => cerrarSesion()
    .then(() => {
      expect(firebase.auth().currentUser).toBe(null);
    }));
});