import { userCurrent } from '../model/modelLoginRegistro.js';
import {
  deletePost, getLike, addCommentPost, getCommentPost, privacyPost
} from '../model/modelPost.js';
import { actualizandoPost, deleteLikePost, addLike } from '../controller/postContr.js';
import { itemComment } from './commentsPost-view.js';

// import { TextPost } from '../controller/postContr.js'
export const itemPost = (publication) => {
  // console.log(data);
  console.log(publication);
  const divElement = document.createElement('div');
  if (publication.typePost === 'Público' || userCurrent().uid === publication.idPost) {
    divElement.innerHTML = `
    <div class="postear">
    <div class="user-post">
    <div>
    <p>Publicado por:  ${publication.email} </p>
    </div>
    <p>${publication.typePost}<p/>
    ${userCurrent().uid === publication.idPost ? `     
    <input id="eliminar" type=image src="https://img.icons8.com/offices/16/000000/delete-sign.png" class="img-eliminar">` : ''}
    </div>
    <div> <p>${publication.date}</p></div>
    <div class="texto-publicacion border-public">
      <textarea id="idpublicacion-${publication.id}" class="text-area" disabled>${publication.textPost}</textarea>
    </div>
      <div class="texto-publicacion fondo-likes">
          <p class="alineando-iconos">
            <img id="liked-${publication.id}" data-like="0" src="https://img.icons8.com/ios/50/000000/like.png" class="icon" >
            <p id="container-like"> 
            <a id="counter-${publication.id}"></a>  
            <a> personas le gusta tu publicación.</a>
            </p>
            ${userCurrent().uid === publication.idPost ? `
              <select id="options-privacy-${publication.id}">
                ${publication.typePost === 'Público' ? `
                <option value="Público">${publication.typePost}</option>
                <option value="Privado">Privado</option>`:
          `<option value="Privado">${publication.typePost}</option>
                    <option value="Público">Público</option>`}      
              </select>   
            <input id="editar" type=image src="https://img.icons8.com/color/48/000000/edit-property.png" class="icon sin-ocultar">
            <input id="guardar" type=image src="https://img.icons8.com/color/48/000000/save.png" class="icon ocultar">`: ``}
      </div>
        <div class="texto-publicacion border-public">
        <textarea  class= "agregar-comentarios"id="idcomentario-${publication.id}" class="text-area-coment"></textarea>
        </div>
        <div><button  class="compartir"id="btncomment-${publication.id}">Comentar</button></div>
        <div id="todoscomments-${publication.id}">        
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
        idPublicacion.focus();
        idPublicacion.setSelectionRange(0, idPublicacion.value.length);
        divElement.querySelector('#guardar').style.display = 'block';
        divElement.querySelector('#editar').style.display = 'none';
      });
      const btnGuardar = divElement.querySelector('#guardar');
      btnGuardar.addEventListener('click', () => {
        actualizandoPost(publication.id, idPublicacion.value);
        idPublicacion.disabled = true;
        divElement.querySelector('#guardar').style.display = 'none';
        divElement.querySelector('#editar').style.display = 'block';
      });
      const tipoPost = divElement.querySelector(`#options-privacy-${publication.id}`)
      tipoPost.addEventListener('change', () => {
        const nuevoTipoPost = tipoPost.value;
        privacyPost(publication.id, nuevoTipoPost)
      });
    }
    const btnLike = divElement.querySelector(`#liked-${publication.id}`);
    const counterLike = divElement.querySelector(`#counter-${publication.id}`);
    const btnComentarioPost = divElement.querySelector(`#btncomment-${publication.id}`);
    const containerCommentPost = divElement.querySelector(`#todoscomments-${publication.id}`);
    //  Agregando Likes
    const contadorLikes = (likes) => {
      const countLike = likes.length;
      counterLike.innerHTML = countLike;
      console.log(countLike);
    };

    const likesPintadosPost = (likes) => {
      for (let i = 0; i < likes.length; i++) {
        if (userCurrent().uid === likes[i].id) {
          btnLike.classList.remove('not-like');
          btnLike.classList.add('liked');
        }
      }
    };

    console.log(publication.id);
    getLike(publication.id, contadorLikes, likesPintadosPost);

    btnLike.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.dataset.like === '0') {
        event.target.dataset.like = '1';
        addLike(publication.id);
        getLike(publication.id, contadorLikes, likesPintadosPost);
        btnLike.classList.remove('not-like');
        btnLike.classList.add('liked');
        // console.log('te gusto');
      } else {
        event.target.dataset.like = '0';
        deleteLikePost(publication.id);
        // console.log('no te gusto');
        btnLike.classList.remove('liked');
        btnLike.classList.add('not-like');
        // getLike(publication.id, contadorLikes, retornar);
      }
    });
    const pintarComentario = (comment) => {
      console.log(comment);
      comment.forEach((element) => {
        console.log(element.comment);
        containerCommentPost.appendChild(itemComment(element));
      });
    };

    getCommentPost(publication.id, pintarComentario);
    btnComentarioPost.addEventListener('click', (e) => {
      e.preventDefault();
      const nuevoComentario = divElement.querySelector(`#idcomentario-${publication.id}`).value;
      console.log(nuevoComentario);
      if (nuevoComentario !== '') {
        containerCommentPost.innerHTML = '';
        addCommentPost(userCurrent().uid, publication.id, publication.email, nuevoComentario);
        getLike(publication.id, contadorLikes, likesPintadosPost);
        btnLike.classList.add('not-like');
        btnLike.classList.remove('liked');
        // console.log('no te gusto');
      }
    });
  }
  return divElement;
};
