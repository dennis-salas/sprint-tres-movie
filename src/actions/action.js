import { types } from "../types/types";
import { db, firebase, googleAuthProvider } from "../firebase/firebaseConfig";

export const login = (id, displayName) => {
    return {
        type: types.login,
        payload: {
            id,
            displayName
        }
    }
}
export const loginGoogle = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                console.log(user);
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout
})



export const registroPersona = (nombre, apellido, email, telefono) => {
    return async (dispatch) => {

        const nuevosRegistros = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono
        }

        await db.collection(`RegistroPersona`).add(nuevosRegistros);

        console.log(nombre, apellido, email, telefono);
        dispatch(registro(nombre, apellido, email, telefono))
    }
}
export const registro = (nombre, apellido, email, telefono) => {
    return {
        type: types.Registrar,
        payload: {
            nombre,
            apellido,
            email,
            telefono
        }
    }
}