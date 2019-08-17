export const cerrarSesion = () => {
    return firebase.auth().signOut();
}