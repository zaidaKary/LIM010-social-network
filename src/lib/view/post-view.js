import { userCurrent } from '../model/modelFirebase.js';
import { deletePost } from '../model/modelPost.js';
import { actualizandoPost } from '../controller/postContr.js';

// import { TextPost } from '../controller/postContr.js'
export const itemPost = (publication) => {
    // console.log(data);
    const divElement = document.createElement('div');
    divElement.innerHTML = `  
    <div class="postear">
    <div class="user-post">
    <p>Publicado por:  ${publication.email} </p>
    ${userCurrent().uid === publication.idPost ? `
    <input id="eliminar" type=image src="https://img.icons8.com/offices/16/000000/delete-sign.png" class="img-eliminar">` : ``}
    </div>
    <div class="texto-publicacion border-public">
      <textarea id="idpublicacion-${publication.id}" class="text-area" disabled>${publication.textPost}</textarea>
    </div>
      <div class="texto-publicacion fondo-likes">
          <p class="alineando-iconos">
            <input id="like" type=image src="https://img.icons8.com/flat_round/64/000000/hearts.png" class="img-corazon">
            <input id="editar" type=image src="https://img.icons8.com/color/48/000000/edit-property.png" class="icon sin-ocultar">
            <input id="guardar" type=image src="https://img.icons8.com/color/48/000000/save.png" class="icon ocultar">
          </p>
      </div>
        <div class="comment-sub1 mp">
           <input id="" class="comentario" placeholder ="Escribe un comentario..." type=text/>
        </div>
      </div>
    `;
    if(userCurrent().uid === publication.idPost){
      const btnEliminar = divElement.querySelector('#eliminar');
      btnEliminar.addEventListener('click', () =>{
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
  return divElement;
}