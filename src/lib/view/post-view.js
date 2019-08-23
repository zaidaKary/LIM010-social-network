import { userCurrent } from '../model/modelFirebase.js';
// import { deletePost } from '../controller/postContr.js';

// import { TextPost } from '../controller/postContr.js';
export const itemPost = (publication) => {
  // console.log(data);
  const divElement = document.createElement('div');
  divElement.innerHTML += `  
    <div class="post postear">
    <div class="user-post">
    <p class="">Publicado por:  ${publication.email} </p>
    ${userCurrent().uid === publication.id ? `
    <button id="delete-${publication.id}" class="like">eliminar</button>` : ``}
    </div>
      <textarea id="${publication.id}" class="">${publication.textPost}</textarea>
      <div class="">
        <div class="">
          <p>
            <input id="btn-facebook" type=image src="https://img.icons8.com/flat_round/64/000000/hearts.png" class="icon">
            <input id="btn-google" type=image src="https://img.icons8.com/ios/50/000000/edit-file.png" class="icon">
          </p>
        </div>
        <div class="comment-sub1 mp">
           <input id="" class="comentario" placeholder ="Escribe un comentario" type=text/>
        </div>
      </div>
    `;
    
  return divElement;
}
