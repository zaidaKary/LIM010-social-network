import MockFirebase from 'mock-cloud-firestore';

const  fixtureData  = {
    __colección__ : {
       posts : {
        __doc__ : {
          abcd123456 : {
            email :'platanito@gmail.com',
            textPost : 'post de viajes',
            idPost : '12345',
            date : '31/18/19',
            typePost : 'privado'
          },
        }
      }
    }
  }

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
import { addPostFirebase, getPost } from '../src/lib/model/modelPost.js';

describe('addPostFirebase', () => {
  it('Deberia agregar un post', (done) => {
    return addPostFirebase('platanito@gmail.com', 'post de viajes', '12345', '31/18/19', 'privado')
      .then(() => {
          const callback = (notes) =>{
          const result = notes.find((element) => {
            return element.textPost === 'post de viajes';
          });
          expect(result.textPost).toBe('post de viajes');
          done();
        }
        getPost(callback);
      });
  });
});
