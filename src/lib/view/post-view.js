import { userCurrent } from '../model/modelFirebase.js';
import { deletePost } from '../model/modelPost.js';
import { deleteLikePost, addLike } from '../controller/postContr.js';

// import { TextPost } from '../controller/postContr.js'
export const itemPost = (publication) => {
  // console.log(data);
  const divElement = document.createElement('div');
  divElement.innerHTML = `  
    <div class="post postear">
    <div class="user-post">
    <p class="">Publicado por:  ${publication.email} </p>
    ${userCurrent().uid === publication.idPost ? `
    <button id="eliminar" >eliminar</button>` : ``}
    </div>
      <label id="${publication.id}" class="">${publication.textPost}</label>

      <div id ="post-image">
      </div>


      <div class="">
        <div class="">
          <p >
            <a id="like-${publication.id}">
            <img src="https://img.icons8.com/ios/50/000000/like.png" class="icon " >
            </a>
            <a  class="hide" id="dislike-${publication.id}">
            <img src="https://img.icons8.com/bubbles/50/000000/like.png" >
            </a>
            <p id="container-like"><a> A :<a/>
            <a id="counter-${publication.id}"></a>  
            <a> personas le gusta tu publicación.</a>
            </p>
          </p>
        </div>
        <div class="comment-sub1 mp">
           <input id="" class="comentario" placeholder ="Escribe un comentario" type=text/>
        </div>
      </div>
    `;

  
  if (userCurrent().uid === publication.idPost) {
    const btnEliminar = divElement.querySelector('#eliminar');
    btnEliminar.addEventListener('click', () => {
      deletePost(publication.id);
    })
  }

  const btnDislike = divElement.querySelector(`#dislike-${publication.id}`);
  const btnLike = divElement.querySelector(`#like-${publication.id}`);

    //  Agregando Likes

  btnLike.addEventListener('click', () => {
    btnDislike.classList.remove('hide');
    btnLike.classList.add('hide'); 
    addLike(publication.id); // guardando en la base de datos
  });

  // Quitando like
  divElement.querySelector(`#dislike-${publication.id}`)
    .addEventListener('click', () => {
      btnDislike.classList.add('hide');
      btnLike.classList.remove('hide');
      deleteLikePost(publication.id)
    });
  return divElement;
}

