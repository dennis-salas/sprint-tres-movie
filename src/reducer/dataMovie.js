import { types } from "../types/types";


export const dataMoviesReducer = (state = [], action) => {
    switch (action.type) {
        case types.SaveMovies:

            return action.payload;

        default:
            return state;
    }
}