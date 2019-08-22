import { userCurrent } from '../model/modelFirebase.js';
export const itemPost = (textPost) => {
    const divElement = document.createElement('div');
    divElement.classList.add('todos-post')

    divElement.innerHTML = `  
    
<div class="user-post">
<p class="">${textPost.email}</p>
${userCurrent().uid === textPost.idUser ? `
<button id="btn-delete-${textPost.id}" class=""><i class=""></i></button>` : ``}
</div>
<div class="p2">
<p id="post-${textPost.id}" class="">${textPost.textPost}</p>
<textarea id="text-${textPost.id}" class="">${textPost.textPost}</textarea>
<div class="">
  <div class="">
    <button id="btn-like-${textPost.id}" class=""></i></button>
    <button id="btn-dislike-${textPost.id}" class=""></i></button>
    <label id="count-likes" class=""></label>
  </div>
  <div class="">
    <select id="" class=" ">
      <option value="">PRIVADO</option>
      <option value="">PUBLICO</option>
    </select>
  </div>
</div>
    `;
    return divElement;
}
