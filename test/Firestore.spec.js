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
        efgh123456: {
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
        const callback = (notes) => {
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
  it('deberia eliminar el post con el id: efgh123456', (done) => {
    return deletePost('efgh123456')
      .then(() => {
        const callback = (post) => {
          const result = post.find((elemento) => {
            return elemento.id === 'efgh123456';
          })
          expect(result).toBe(undefined);
          done();
        }
        getPost(callback)
      });
  });
});