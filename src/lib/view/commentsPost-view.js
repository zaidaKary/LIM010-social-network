
export const itemComment = (objComment) => {
  const divElement = document.createElement('div');
  divElement.innerHTML = `
    <div>
    <div  class=">
    <p class="">Publicado por:  ${objComment.email} </p>
    </div>  
    <div class="">
    <p >${objComment.comment}</p>
    </div>  
    </div>  
    `;
  return divElement;
};
