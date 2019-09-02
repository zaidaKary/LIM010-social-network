// Actualizando perfil de usuario en la base de datos
export const updateProfile = (nuevoUserNombre, id) => {
  firebase.firestore().collection('users').doc(id).update({
    Nombre: nuevoUserNombre,
  });
};
