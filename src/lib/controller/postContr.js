import { userCurrent } from '../model/modelFirebase.js';
import { addPostFirebase, deleteLikeDb, addLikeDb ,editPost} from '../model/modelPost.js';
import { db } from '../../main.js';

const allDatePost= (fullDate)=>{
  const getDate = fullDate.getDate();
  const getMonth = fullDate.getMonth()+1;
  const getFullYear = fullDate.getFullYear()
  
  const minutes =  fullDate.getMinutes();
  const seconds = fullDate.getSeconds();
  let  hours = fullDate.getHours();
  
  const day = `${getDate}/${getMonth}/${getFullYear}`;
  const myClock = `A las: ${hours}:${minutes}:${seconds}`;
  const date = `${day} ${myClock}`
  console.log(date);
  return date;  
}

export const textPost = () => {
  event.preventDefault();
  const allDate = new Date();
  const date = allDatePost(allDate);
  const txtpublicacion = document.getElementById('publicacion').value
  addPostFirebase(userCurrent().email, txtpublicacion, userCurrent().uid, date) // pinta en el home
    .then((res) => {
      document.querySelector('#publicacion').value = "";
      console.log('Document written with ID: ', res.id);
    })
    .catch(() => {
      // console.error('Error adding document: ', error);.
    });
}
// muestra todos los post
export const getPost = (datapost) => {
  event.preventDefault();
  db.collection('posts').orderBy("date", "desc")
    .onSnapshot((querySnapshot) => {
      const array = [];
      querySnapshot.forEach((doc) => {               
        array.push({id: doc.id, ...doc.data()});
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
// export const set_Publication = (post, state) => {
//   firebase.auth().onAuthStateChanged(function(user) {
//       getUsername(user, post, user.uid, state);
//   });
// }
export const getPrivatePosts = (idUser, callback)=>{
  db.collection('posts').where("idPost","==",idUser).where("typePost","==","privado")
  .orderBy("date","desc").onSnapshot(querySnapshot=>{
    let posts =[];
    querySnapshot.forEach((doc) => {
        posts.push({id: doc.id,...doc.data()});                
      });   
      callback(posts);
    })
}