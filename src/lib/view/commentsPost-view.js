
export const itemComment = (objComment) => {
  const divElement = document.createElement('div');
  divElement.innerHTML = `
    <div>
    <p>${objComment.comment}</p>
    </div>    
    `;
  return divElement;
};
