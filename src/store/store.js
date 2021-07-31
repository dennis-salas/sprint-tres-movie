import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { loginRducer } from '../reducer/loginReducer';
import { registerReducer } from '../reducer/registerReducer';
import { movieReducer } from '../reducer/movieReducer';
import { dataMoviesReducer } from '../reducer/dataMovie';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginRducer,
    Registrar: registerReducer,
    movie: movieReducer,
    dataMovies: dataMoviesReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)