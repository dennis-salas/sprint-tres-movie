import React from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { activeMovie, Delete } from '../actions/actionMovie'

export const MovieCard = () => {

    const dispatch = useDispatch()

    const handleEdit = (data) => {
        dispatch(activeMovie(data.id, data))
    }

    const handleDelete = (id) => {
        dispatch(Delete(id))
    }
    const { movie } = useSelector(state => state.movie)
    console.log(movie);
    return (
        <Container>
            <h2>Peliculas añadidas</h2>
            {
                movie.map(ele => (
                    <Card className="my-5" key={ele.id}>
                        <Row className="justify-content-md-center align-items-center">
                            <Col md={4} sm={12}>
                                <Card.Img variant="top" src={ele.url} fluid="true" />
                            </Col>
                            <Col md={8} sm={12}>
                                <Card.Body>
                                    <Card.Title>{ele.title}</Card.Title>
                                    <Card.Text><small className="text-muted">
                                        {ele.sipnosis}
                                    </small></Card.Text>
                                    <Card.Text><small className="text-muted">
                                        {ele.gender}
                                    </small></Card.Text>
                                    <Button className="mx-2"
                                        onClick={() => handleEdit(ele)}
                                    >
                                        Editar
                                    </Button>
                                    <Button
                                        onClick={() => handleDelete(ele.id)}
                                    >
                                        Eliminar
                                    </Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                ))
            }
        </Container>
    )
}
