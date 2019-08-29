import MockFirebase from 'mock-cloud-firestore';
import { addPostFirebase } from '../src/lib/model/modelPost.js';

const  fixtureData  = {
    __colección__ : {
      notas : {
        __doc__ : {
          abc1d : {
            título :  ' terminar la pildora ' ,
            completo :  falso
          },
        }
      }
    }
  }
  global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
describe('iniciar Sesion', () => {
    it('Deberia iniciar sesion', () => addPostFirebase('laboratoria@lab.com', '123456789')
      .then((user) => {
        expect(user.email).toBe('laboratoria@lab.com');
      }));
  });