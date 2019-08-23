import { userCurrent } from '../model/modelFirebase.js';

export const itemPost = (data) => {
    const divElement = document.createElement('div');
    divElement.classList.add('todos-post')

    divElement.innerHTML = `  
    
<div class="user-post">
<p class="">${data.email}</p>
${userCurrent().uid === data.idUser ? `
<button id="btn-delete-${data.id}" class=""><i class=""></i></button>` : ``}
</div>
<div class="p2">
<p id="post-${data.id}" class="">${data.textPost}</p>
<textarea id="text-${data.id}" class="">${data.textPost}</textarea>
<div class="">
  <div class="">
    <button id="btn-like-${data.id}" class=""></i></button>
    <button id="btn-dislike-${data.id}" class=""></i></button>
    <label id="count-likes" class=""></label>
  </div>
  <div class="">
    <select id="" class=" ">
      <option value="">PRIVADO</option>
      <option value="">PUBLICO</option>
    </select>
  </div>
</div>`;
return divElement;
}



