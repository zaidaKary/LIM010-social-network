export const obtenerInfo = (userName, userCorreo, userImage) => {
  const auth = firebase.auth();
  return auth.onAuthStateChanged( user => {
    if (user) {
      const displayName = user.displayName;
      const userEmail = user.email;
      const userPhoto = user.photoURL;
      if(displayName == null && userPhoto == null){
        console.log(user);
        console.log(displayName,userPhoto,userEmail);
        
        userName.textContent = 'Usuario Nuevo';
        userCorreo.textContent = userEmail;
        userImage.src = './img/profile.png';
      }else{
      // User is signed in.
      console.log(user);
      console.log(displayName,userPhoto,userEmail);
      userName.textContent = displayName;
      userCorreo.textContent = userEmail;
      userImage.src = userPhoto;
    }  
    } else {
      // No user is signed in.
    }
  });
};
// export const obtenerUsuario = (userName) => {
//   const auth = firebase.auth();
//   return auth.onAuthStateChanged( user => {
//     if (user) {
//       const displayName = user.displayName;
//         userName.textContent = displayName;
//     } else {
//       // No user is signed in.
//     }
//   });
// };