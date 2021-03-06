import { types } from "../types/types";
import { fileUpLoad } from "../helpers/fileUpLoad";
import { db } from '../firebase/firebaseConfig'
import { loadMovie } from "../helpers/loadMovie";
import Swal from 'sweetalert2'

export const AddMovie = (movie, file) => {
    return async (dispatch, getSate) => {
        let fileUrl = []

        const uid = getSate().login.id

        try {
            fileUrl = await fileUpLoad(file)
        } catch (error) {
            file = []

        }

        const newMovie = {
            title: movie.title,
            sipnosis: movie.sipnosis,
            gender: movie.gender,
            url: fileUrl,
        }

        const docRef = await db.collection(`${uid}/blockMaster/Peliculas`).add(newMovie);
        dispatch(AddNewMovie(docRef.uid, newMovie))
    }

}

export const AddNewMovie = (id, movie) => ({
    type: types.AddNewMovie,
    payload: {
        id, ...movie
    }
})

export const startLoadingMovie = (uid) => {
    return async (dispatch) => {
        const movies = await loadMovie(uid)
        dispatch(setMovie(movies))
    }
}

export const setMovie = (movies) => {
    return {
        type: types.LoadMovie,
        payload: movies
    }
}

export const activeMovie = (id, movie) => {
    return {
        type: types.ActiveMovie,
        payload: {
            id,
            ...movie
        }
    }
}

export const saveMovies = (movies) => {
    return {
        type: types.SaveMovies,
        payload: movies
    }
}

export const clearMovie = () => {
    return {
        type: types.CleanMovie
    }
}



export const startSaveMovie = (movie, file) => {

    return async (dispatch, getState) => {

        const { uid } = getState().login.id;
        let fileUrl = []

        try {
            fileUrl = await fileUpLoad(file)
        } catch (error) {
            fileUrl = movie.url
        }
        console.log(fileUrl);

        if (!movie.url) {
            delete movie.url
        }

        const editMovie = {
            title: movie.title,
            sipnosis: movie.sipnosis,
            gender: movie.gender,
            url: fileUrl
        }


        const movieToFirestone = { ...editMovie }
        delete movieToFirestone.uid

        Swal.fire({
            title: 'Cargando...',
            text: 'Por favor espere ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        await db.doc(`${uid}/blockMaster/Peliculas/${movie.id}`).update(editMovie)

        dispatch(refreshMovie(movie.id, editMovie));
        Swal.fire('Guardado', movie.title, 'Cambio exitoso')
        dispatch(startLoadingMovie(uid))
    }
}

export const refreshMovie = (id, editmovie) => ({
    type: types.UpdateMovie,
    payload: {
        id,
        editmovie: {
            id,
            ...editmovie
        }
    }
})

export const Delete = (id, data) => {

    return async (dispatch, getState) => {
        const uid = getState().login.id;
        const movie = data

        try {

            await db.doc(`${uid}blockMaster/Peliculas/${id}`).delete()

            dispatch(deleteMovie(id))
            dispatch(refreshMovie(id, movie))
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Delete',
                showConfirmButton: false,
                timer: 1500
            })
            dispatch(startLoadingMovie(uid))

        } catch (error) {
            Swal.fire(
                'Error!',
                'Hubo un problema al elminar el registro!',
                'error'
            )
        }

    }
}

export const deleteMovie = (id) => ({
    type: types.deleteMovie,
    payload: id
})

export const startUploanding = (file) => {
    return async (dispatch, getState) => {
        const { active: ActiveMovie } = getState().movie

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        const fileUrl = await fileUpLoad(file)
        ActiveMovie.url = fileUrl
        dispatch(startSaveMovie(activeMovie))

        Swal.close()
    }
}