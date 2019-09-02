
export const itemComment = (objComment) => {
  const divElement = document.createElement('div');
  divElement.innerHTML = `
    <div  class="border-public comment-post">
    <p class="comentar-post">Publicado por:  ${objComment.email} </p>
    </div>  
    <div class="texto-publicacion border-public">
    <p >${objComment.comment}</p>
    </div>    
    `;
  return divElement;
};
