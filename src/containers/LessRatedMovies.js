import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { saveMovies } from '../actions/actionMovie'
import { Row, Col, Card, Container } from 'react-bootstrap';

const LessRatedMovies = () => {

    const [movieTop, SetMovieTop] = useState([])
    const dispatch = useDispatch()
    const urlImage = 'https://image.tmdb.org/t/p/w500/';

    useEffect(() => {
        const getMovie = async () => {
            const resp = await axios
                .get('https://api.themoviedb.org/3/movie/upcoming?api_key=0382ef34479354ade6a693b30fa4e79e&language=es-COL&page=1')
                .catch((err) => {
                    console.log('error', err);
                })
            SetMovieTop(resp.data.results)
            dispatch(saveMovies(resp.data.results))
        };
        getMovie();
    }, [dispatch])

    return (
        <div>
            <Container className="my-2">
                <Row xs={1} md={5} className="my-2">
                    {
                        movieTop.map((movie) => (
                            <Col key={movie.id} className="my-2">
                                <Card className="bg-dark text-white">

                                    <Card.Img
                                        src={urlImage + movie.poster_path}
                                        alt={movie.original_title}
                                    />
                                    <Card.ImgOverlay>
                                        <Card.Text>{movie.vote_average}</Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default LessRatedMovies
