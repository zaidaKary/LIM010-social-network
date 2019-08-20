export const createUserWithEmailAndPassword = (email, pass) => {
    return firebase.auth().createUserWithEmailAndPassword(email, pass)
};