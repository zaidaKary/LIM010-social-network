export const signOff = () => {
    firebase.auth().signOut();
    location.hash = '#/';
};