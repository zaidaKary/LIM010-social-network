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

// auth.createUserWithEmailAndPassword(email,pass).then((result) => {
  
//   return db.collection('users').doc(result.user.uid).set({
//       Username: username,
//       Foto: 'https://image.flaticon.com/icons/png/512/16/16363.png',
//       Email: email
//   });