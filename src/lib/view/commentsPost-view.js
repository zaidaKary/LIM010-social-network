import { userCurrent } from '../model/modelLoginRegistro.js';
export const itemComment = (objComment) => {
  const divElement = document.createElement('div');
  divElement.innerHTML = `
    <div class="comentario-post">
    <p class="color-post">${userCurrent().email}</p>
    <p >${objComment.comment}</p>
    </div>    
    `;
  return divElement;
};
