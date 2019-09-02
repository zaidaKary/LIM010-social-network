import MockFirebase from 'mock-cloud-firestore';
import { addPostFirebase, getPost, deletePost, editPost, privacyPost, addLikeDb, getLike } from '../src/lib/model/modelPost.js';

const fixtureData = {
  __colección__: {
    posts: {
      __doc__: {
        abcd123456: {
          email: 'usuario@gmail.com',
          textPost: 'post de viajes',
          idPost: '1',
          date: '30/08/19',
          typePost: 'privado',
          __collection__: {
            likes: {
              __doc__: {
                xyz012: {
                  iduser: 'xyz012',
                  idPost: 'abcd123456',
                  email: 'prueba@gmail.com',
                },
              },
            },
          }
        },
        efgh123456: {
          email: 'prueba@gmail.com',
          textPost: 'vamos de viaje',
          idPost: '2',
          date: '31/08/19',
          typePost: 'privado',
          __collection__: {
            likes: {
              __doc__: {
                xyz007: {
                  iduser: 'xyz007',
                  idPost: 'efgh123456',
                  email: 'usuario@gmail.com',
                }
              }
            },
          }
        },
      },
    },
  },
}

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
describe('addPostFirebase', () => {
  it('Deberia agregar un post', (done) => {
    return addPostFirebase('usuario@gmail.com', 'post de viajes', '1', '30/08/19', 'privado')
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
          });
          expect(result).toBe(undefined);
          done();
        };
        getPost(callback);
      });
  });
});

describe('editPost', () => {
  it('Debería editar un post', (done) => {
    return editPost('abcd123456', 'post de viajes')
      .then(() => {
        const callback = (post) => {
          const result = post.find((elemento) => {
            return elemento.textPost === 'post de viajes';
          });
          expect(result).toBe('post de viajes 2');
          done();
        }
        getPost(callback);
      });
  });
});

describe('privacyPost', () => {
  it('deberia leer los post tipo privado', (done) => {
    return privacyPost('abcd123456', 'privado')
      .then(() => getPost(
        (posts) => {
          const result = posts.find((post) => post.typePost === 'privado')
          expect(result.typePost).toBe('privado');
          done();
        }
      ))
  })
})

describe('addLikeDb', () => {
  it('deberia agregar like a un post', (done) => {
    return addLikeDb('xyz012', 'abcd123456', 'prueba@gmail.com')
      .then(() => {
        const callback = (likes) => {
          const result = likes.find((element) => {
            return element.iduser === 'xyz012';
          });
          expect(result.iduser).toBe('xyz012');
          done();
        }
        getLike(callback);
      });
  });
})
