// export const login = () => {
//   const element = document.createElement('section');
//   const templateLogin = `
//     <section class="login">
//     <img class="logo" src="./img/logo.png"  alt="logo">
//     <p>«Vive la aventura de viajar»</p>
//     <input class="sesion" type="email" id="email" placeholder="Email">
//     <input class="sesion" type="password" id="password" placeholder="Password">
//     <button class="sesion" id="btnLogin">Log in</button>
//     <p>O bien ingresa con...</p>
//     <p>
//         <img id="facebook" class="icon" src="https://img.icons8.com/color/48/000000/facebook-new.png">
//         <img class="icon" src="https://img.icons8.com/color/48/000000/google-plus--v2.png">
//     </p>
//     <p>¿No tienes una cuenta?<a href="#/registrar" id="btnRegistrar">Registrate</a></p>
//   </section>`;
//   element.innerHTML = templateLogin;
//   const btnLogin = document.querySelector('#btnLogin');
// btnLogin.addEventListener('click', (e) => {
//   // obtener email y pass
//   const correo = document.querySelector('#email').value;
//   const contra = document.querySelector('#password').value;
//   //const auth = firebase.auth();
//   // sig in
//   firebase.auth().signInWithEmailAndPassword(correo, contra);
//   .then(change=()=>{
    
//   })
//   .catch(error=()=>{
//      const errorCode = error.code;
//      const errorMessage = error.message;
//      console.log(errorMessage);
     
//   });
//   // document.getElementById('imagen').classList.remove('hide');
// });


//   return element;
// };
