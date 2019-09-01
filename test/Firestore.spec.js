import MockFirebase from 'mock-cloud-firestore';
import { addPostFirebase, getPost, deletePost } from '../src/lib/model/modelPost.js';

const fixtureData = {
  __colección__: {
    posts: {
      __doc__: {
        abcd123456: {
          email: 'platanito@gmail.com',
          textPost: 'post de viajes',
          idPost: '12345',
          date: '31/18/19',
          typePost: 'privado'
        },
      }
    }
  }
}

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

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

describe('deletePost', () => {
  it('debería de eliminar un post', done => deletePost('abc554')
    .then(() => {
      const callback = (posts) => {
        const resultado = posts.find(elemento => elemento.id === 'abc554');
        expect(resultado).toBe(undefined);
        done();
      };
      getPost(callback);
    }));
});
