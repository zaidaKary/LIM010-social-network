// importamos la funcion mock
import MockFirebase from '../_mocks_/firebase-mock.js';

// importamos la funcion que vamos a testear
import { signInWithEmailAndPassword } from '../src/lib/model/modelFirebase.js';
// de manera global firebase van a ser remplazados por mock
global.firebase = MockFirebase();


describe('signInWithEmailAndPassword', () => {
  it('debería ser una función', () => {
    expect(typeof signInWithEmailAndPassword).toBe('function');
  });
  it('debería retornar el correo y password ingresado', () => {
    return signInWithEmailAndPassword('ejemplo@lt.com', 'abc123')
      .then(user => expect(user.email).toBe('ejemplo@lt.com'));
  });
});
