import { userCurrent } from '../model/modelFirebase.js';
import { deletePost } from '../model/modelPost.js';

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
      <label id="${publication.id}" class="">${publication.textPost}</label>
    </div>
      <div class="texto-publicacion fondo-likes">
          <p>
            <input id="btn-like" type=image src="https://img.icons8.com/flat_round/64/000000/hearts.png" class="img-corazon">
            <input id="btn-editar" type=image src="https://img.icons8.com/color/48/000000/edit-property.png"" class="icon">
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
      })
    }

  return divElement;
}
