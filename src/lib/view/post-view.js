import { userCurrent } from '../model/modelFirebase.js';
// import { TextPost } from '../controller/postContr.js'
export const itemPost = (publication) => {
    // console.log(data);
    const divElement = document.createElement('div');
    divElement.innerHTML += `  
    <div class="user-post">
    <p class="">${publication.email}</p>
</div>
<label>${publication.textPost}</label>
    `;
    return divElement;
}
