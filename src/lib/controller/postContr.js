import { userCurrent } from '../model/modelFirebase.js';
import { addPostFirebase, deleteLikeDb, addLikeDb ,editPost} from '../model/modelPost.js';
import { db } from '../../main.js';

export const textPost = () => {
  event.preventDefault();
  const txtpublicacion = document.getElementById('publicacion').value
  // const imgPost = document.getElementById('image-file').value
  addPostFirebase(userCurrent().email, txtpublicacion, userCurrent().uid) // pinta en el home
    .then((res) => {
      document.querySelector('#publicacion').value = "";
      console.log('Document written with ID: ', res.id);
    })
    .catch(() => {
      // console.error('Error adding document: ', error);.
    });
}
export const getPost = (datapost) => {
  event.preventDefault();
  db.collection('posts')
    .onSnapshot((querySnapshot) => {
      const array = [];
      querySnapshot.forEach((doc) => {
        array.push({ id: doc.id, ...doc.data() });
        console.log(array);
      });
      datapost(array);
    });
};


/*likes*/
export const deleteLikePost = (idPost) => {
  deleteLikeDb(userCurrent().uid, idPost)
    .then(() => {
    });
};

export const addLike = (idPost) => {
  addLikeDb(userCurrent().uid, idPost, userCurrent().email)
    .then(() => {
    });
};


export const getImagePost = (file, uploader, callback) => {
  // Crear un storage ref
  const storageRef = firebase.storage().ref();    //
  const imageRef = storageRef.child(`img/${file.name}`)

  // Subir archivo
  const task = imageRef.put(file); //.put mètodo de firebase.
  return task.on('state_changed', //actualizamos la barra de progreso.
    (snapshot) => {  // notifica el proceso de subir archivo.
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploader.value = percentage;
    },
    (error) => (error),
    () => {
      const downloadImg = task.snapshot.ref.getDownloadURL()//archivo subido.
      downloadImg
        .then(callback)
    }
  );
}
export const actualizandoPost = (id, publicacion) => {
  editPost(id, publicacion);
};

