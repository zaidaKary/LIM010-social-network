import {db} from '../../main.js';
export const guardarRegistro = (username, foto, email ) => {
    return db.collection('users').doc(result.user.uid).set({
        Username: username,
        Foto: foto,
        Email: email
    });
};