import { userCurrent } from '../model/modelFirebase.js';
import { addPostFirebase, editPost} from '../model/modelPost.js';
import { db } from '../../main.js';

const allDatePost= (fullDate)=>{
  const getDate = fullDate.getDate();
  const getMonth = fullDate.getMonth()+1;
  const getFullYear = fullDate.getFullYear()
  
  const minutes =  fullDate.getMinutes();
  const seconds = fullDate.getSeconds();
  let  hours = fullDate.getHours()-12;
  
  const day = `${getDate}/${getMonth}/${getFullYear}`;
  const myClock = `A las: ${hours}:${minutes}:${seconds}`;
  const date = `${day} - ${myClock}`
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