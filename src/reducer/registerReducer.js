import { types } from "../types/types";

export const registerReducer = (state = [], action) => {
    switch (action.type) {
        case types.Registrar:
            return {
                nombre: action.payload.nombre,
                apellido: action.payload.apellido,
                email: action.payload.email,
                telefono: action.payload.telefono
            }
        default:
            return state;
    }
}