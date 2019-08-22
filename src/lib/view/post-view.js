import { userCurrent } from '../model/modelFirebase.js';
//import { TextPost } from '../controller/postContr.js'
export const itemPost = (data) => {
    console.log(data);
    const divElement = document.createElement('div');
    divElement.classList.add('todos-post')
    divElement.innerHTML += `  
        <div class="user-post">
            <p class="">${data.Email}</p>
            ${userCurrent().uid === data.id ? `
            <button id="btn-delete-${data.id}" class=""><i class=""></i></button>` : ``}
        </div>
        <div class="p2">
            <textarea id="text-${data.id}" class="">${data.TextPost}</textarea>
            <div class="">
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
