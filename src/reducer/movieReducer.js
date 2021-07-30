import { types } from "../types/types";

const initialState = {
    movie: [],
    active: null
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AddNewMovie:
            return {
                ...state,
                movie: [action.payload, ...state.movie]
            }
        case types.ActiveMovie:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.LoadMovie:
            return {
                ...state,
                movie: [...action.payload]
            }
        case types.UpdateMovie:
            console.log(action.payload.id);
            return {
                ...state,
                movie: state.movie.map(
                    movie => movie.id === action.payload.id
                        ? action.payload.movie
                        : movie
                )
            }
        case types.CleanMovie:
            return {
                ...state,
                active: null
            }
        default:
            return state;
    }
}