import { types } from "../types/types";

const initialState = {
    movie: [],
    active: null
}

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AddNewMovie:
            return {
                ...state,
                movie: [action.payload, ...state.movie]
            }

        default:
            return state;
    }
}