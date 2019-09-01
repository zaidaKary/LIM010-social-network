import { userCurrent } from '../model/modelFirebase.js';
import { deletePost, getLike } from '../model/modelPost.js';
import { actualizandoPost, deleteLikePost, addLike } from '../controller/postContr.js';

// import { TextPost } from '../controller/postContr.js'
export const itemPost = (publication) => {
  // console.log(data);
  const divElement = document.createElement('div');
  if (publication.typePost === 'publico' || userCurrent().uid === publication.idPost) {
    divElement.innerHTML = `
    <div class="postear">
    <div class="user-post">
    <div>
    <p>Publicado por:  ${publication.email} </p>
    <p> Publicado el :${publication.date}</p>
    </div>
    <p>${publication.typePost}<p/>
    ${userCurrent().uid === publication.idPost ? `     
    <input id="eliminar" type=image src="https://img.icons8.com/offices/16/000000/delete-sign.png" class="img-eliminar">` : ''}
    </div>
    <div class="texto-publicacion border-public">
      <textarea id="idpublicacion-${publication.id}" class="text-area" disabled>${publication.textPost}</textarea>
    </div>
      <div class="texto-publicacion fondo-likes">
          <p class="alineando-iconos">
            <img id="liked-${publication.id}" data-like="0" src="https://img.icons8.com/ios/50/000000/like.png" class="icon" >
            <p id="container-like"><a> A :<a/>
            <a id="counter-${publication.id}"></a>  
            <a> personas le gusta tu publicación.</a>
            </p>
            <input id="editar" type=image src="https://img.icons8.com/color/48/000000/edit-property.png" class="icon sin-ocultar">
            <input id="guardar" type=image src="https://img.icons8.com/color/48/000000/save.png" class="icon ocultar">
          </p>
      </div>
        <div class="comment-sub1 mp">
           <input id="" class="comentario" placeholder ="Escribe un comentario..." type=text/>
        </div>
      </div>
    `;
    if (userCurrent().uid === publication.idPost) {
      const btnEliminar = divElement.querySelector('#eliminar');
      btnEliminar.addEventListener('click', () => {
        deletePost(publication.id);
      });
      const btnEditar = divElement.querySelector('#editar');
      const idPublicacion = divElement.querySelector(`#idpublicacion-${publication.id}`);
      btnEditar.addEventListener('click', () => {
        idPublicacion.disabled = false;
        divElement.querySelector('#guardar').style.display = 'block';
        divElement.querySelector('#editar').style.display = 'none';
      });
      const btnGuardar = divElement.querySelector('#guardar');
      btnGuardar.addEventListener('click', () => {
        const idPublicacion = divElement.querySelector(`#idpublicacion-${publication.id}`);
        actualizandoPost(publication.id, idPublicacion.value);
        idPublicacion.disabled = true;
        divElement.querySelector('#guardar').style.display = 'none';
        divElement.querySelector('#editar').style.display = 'block';
      });
    }
    // const btnDislike = divElement.querySelector(`#dislike-${publication.id}`);
    const btnLike = divElement.querySelector(`#liked-${publication.id}`);
    //  Agregando Likes

    getLike(publication.id, (likes) => {
      const countLike = likes.length;
      divElement.querySelector(`#counter-${publication.id}`).innerHTML = countLike;
      console.log(countLike);


      btnLike.addEventListener('click', (event) => {
        if (event.target.dataset.like === '0') {
          event.target.dataset.like = '1';
          btnLike.classList.remove('not-like');
          btnLike.classList.add('liked');
          console.log('te gusto');
          addLike(publication.id); // guardando en la base de datos
        } else {
          event.target.dataset.like = '0';
          console.log('no te gusto');
          btnLike.classList.remove('liked');
          btnLike.classList.add('not-like');
          deleteLikePost(publication.id);
        }
      });
    });
  }
  return divElement;
};
