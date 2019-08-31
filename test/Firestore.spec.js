import MockFirebase from 'mock-cloud-firestore';

const  fixtureData  = {
    __colección__ : {
       posts : {
        __doc__ : {
          abcd123456 : {
            título :  ' post de viajes' ,
          },
          zaidamilcabetsy : {
            título :  ' hola post' ,
          },
        }
      }
    }
  }

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
import { addPostFirebase } from '../src/lib/model/modelPost.js';
import { getPost } from '../src/lib/controller/postContr.js';

describe('addPostFirebase', () => {
    it('Deberia agregar un post', (done) => 
    addPostFirebase('el post fue agregado').then((data) => {
        const callback = (notes) =>{
            console.log(notes);
            done()
        }
        getPost(callback)
        // expect(data).toBe('la nota fue agregada');
      }));
  });