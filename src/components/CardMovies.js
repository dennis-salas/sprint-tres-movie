import React, { useState } from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { DetailMovie } from './DetailMovie';

export const CardMovies = () => {

    const [modalShow, setModalShow] = useState(false);
    const [selectMovie, setSelectMovie] = useState({});
    const movies = useSelector((state) => state.dataMovies);
    const urlImage = 'https://image.tmdb.org/t/p/w500/';

    const handleShow = (movie) => {
        setModalShow(true);
        setSelectMovie(movie.id)
    }
    return (
        <div>
            <Container>
                <Row xs={1} md={5} className="my-2">
                    {
                        movies.map((movie) => (
                            <Col key={movie.id} className="my-2">
                                <Card className="bg-dark text-white"
                                    onClick={() => handleShow(movie)}
                                >
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
            <DetailMovie
                show={modalShow}
                onHide={() => setModalShow(false)}
                id={selectMovie}
            />
        </div>
    )
}
