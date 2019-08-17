export const obtenerInfo = () => {
  const userName = document.getElementById('name');
  const userCorreo = document.getElementById('correo');
  const userImage = document.getElementById('foto');
  const auth = firebase.auth();
  return auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      console.log(user);
      const displayName = user.displayName;
      const userEmail = user.email;
      const userPhoto = user.photoURL;
      console.log(displayName, userPhoto, userEmail);

      userName.textContent = displayName;
      userCorreo.textContent = userEmail;
      userImage.src = userPhoto;
      userImage.alt = displayName;
    } else {
      // No user is signed in.
    }
  });
};
