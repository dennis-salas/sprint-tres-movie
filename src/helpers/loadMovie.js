import { db } from "../firebase/firebaseConfig";

export const loadMovie = async (uid) => {

    const movieStore = await db.collection(`${uid}/blockMaster/Peliculas`).get()
    const movie = [];

    movieStore.forEach(hijo => {
        movie.push({
            id: hijo.id,
            ...hijo.data()
        })
    });
    return movie
}