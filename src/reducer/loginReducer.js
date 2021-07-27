import { types } from "../types/types";

export const loginRducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                id: action.payload.id,
                name: action.payload.displaynName
            }
        case types.logout:
            return {}
        default:
            return state
    }
}