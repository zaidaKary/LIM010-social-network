import { userCurrent } from '../model/modelFirebase.js';
export const itemPost = (data) => {
  console.log(userCurrent().uid);
  console.log(data.id);
  const divElement = document.createElement('div');
  divElement.classList.add('todos-post')
  divElement.innerHTML = `
  <div class="post postear">
  <div class="user-post">
  <p class="">Publicado por:  ${data.email} </p>
  ${userCurrent().uid === data.id ? `
  <button id="${data.id}" class="like">eliminar</button>` : ``}
  </div>
    <textarea id="text-${data.id}" class="">${data.textPost}</textarea>
    <div class="">
      <div class="">
        <button class="like" >LIKE</i></button>
        <button  class="like">CMP</button>
      </div>
      <div class="comment-sub1 mp">
         <input id="" class="comentario" placeholder ="Escribe un comentario" type=text/>
        </div>
    </div>
    `;
  return divElement;
}

