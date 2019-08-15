import { db } from '../../main.js';

export const guardarDatos = (nombre, apellido, nacimiento, telefono, correo) => {
    return db.collection("users").add({
            first: nombre,
            last: apellido,
            date: nacimiento,
            telephone: telefono,
            email: correo
        })
        .then(function(docRef) {
            console.log("Documento escrito con ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error al agregar documento: ", error);
        });
};
