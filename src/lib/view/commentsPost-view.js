import { userCurrent } from '../model/modelLoginRegistro.js';
export const itemComment = (objComment) => {
  console.log(objComment);
  const divElement = document.createElement('div');
  divElement.innerHTML = `
    <div class="comentario-post">
    <p class="color-post">${objComment.email}</p>
    <p >${objComment.comment}</p>
    </div>    
    `;
  return divElement;
};
