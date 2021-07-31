import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'
import { useSelector } from 'react-redux'

export const DetailMovie = (props) => {

    const [genres, setGenres] = useState([]);
    const movies = useSelector((state) => state.dataMovies)
    const [selectedMovie, setSelectedMovie] = useState({});
    const [selectedGenre, setSelectedGenre] = useState('');
    const urlImage = 'https://image.tmdb.org/t/p/w500/';

    const getGenreMovie = async () => {
        const resp = await axios
            .get('https://api.themoviedb.org/3/movie/popular?api_key=0382ef34479354ade6a693b30fa4e79e&language=es-Col&page=1')
            .catch((err) => {
                console.log('Error', err);
            })
        setGenres(resp.data.genres);
    }
    useEffect(() => {
        getGenreMovie();
    }, [])

    useEffect(() => {
        setSelectedMovie(movies.find((movie) => movie.id === props.id))
    }, [movies, props.id])

    useEffect(() => {
        if (selectedMovie) {
            setSelectedGenre(
                genres.find((gen) => gen.id === selectedMovie.genre_ids[0])
            );
        }
    }, [selectedMovie, genres]);

    return (
        <Modal
            {...props}
            size='lg'
        >
            {
                selectedMovie && (
                    <Modal.Body>
                        <h4>{selectedMovie.title}</h4>
                        <img src={urlImage + selectedMovie.poster_path} alt='' />
                        <p>{selectedMovie.overview}</p>
                        <div>
                            {
                                selectedMovie.release_date
                                    ? selectedMovie.release_date.split('_')[0]
                                    : ''
                            }
                            <span>{selectedGenre && selectedGenre.name}</span>
                        </div>
                    </Modal.Body>
                )
            }
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
