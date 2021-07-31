import React, { useEffect } from 'react'
import { Slider } from '../components/Slider'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { saveMovies } from '../actions/actionMovie'
import { CardMovies } from '../components/CardMovies'
export const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const getMovie = async () => {
            const resp = await axios
                .get('https://api.themoviedb.org/3/movie/popular?api_key=0382ef34479354ade6a693b30fa4e79e&language=es-Col&page=1')
                .catch((err) => {
                    console.log('error', err);
                })
            dispatch(saveMovies(resp.data.results))
        };
        getMovie();
    }, [dispatch])

    return (
        <div>
            <Slider />
            <CardMovies />
        </div>
    )
}
