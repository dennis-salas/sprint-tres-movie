import React, { useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useForm } from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import { adicionarPelicula, listarPeliculas } from '../actions/action'

const AddMovie = () => {
    //const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(listarPeliculas());
    }, [])

    const [formValues, handleInputChange, reset] = useForm({
        nombrePelicula: '',
        image: '',
        sipnosis: ''

    })
    const { nombrePelicula, image, sipnosis } = formValues

    const handleAdicionar = (e) => {
        e.preventDefault();
        console.log(nombrePelicula, image, sipnosis);
        //dispatch(adicionarPelicula(nombrePelicula, image, sipnosis))
        reset();
    }
    return (
        <div>
            <Container className="w-25 my-5 border border-dark p-2">
                <Form onSubmit={handleAdicionar}>
                    <div>
                        <div>
                            <h2 className="text-center">Adicionar Pelicula</h2>
                            <p className="text-center">Agrega una Pelicula a tu colección</p>
                        </div>
                        <br />
                        <div>
                            <Form.Control
                                type="text"
                                name="nombrePelicula"
                                placeholder="Nombre Pelicula"
                                value={nombrePelicula}
                                onChange={handleInputChange}
                                required />
                            <br />
                            <Form.Control
                                type="text"
                                name="image"
                                placeholder="URL imagen"
                                value={image}
                                onChange={handleInputChange}
                                required />
                            <br />
                            <Form.Control
                                type="text"
                                name="sipnosis"
                                placeholder="Sipnosis"
                                value={sipnosis}
                                onChange={handleInputChange}
                                required />
                            <br />
                            <button
                                className="btn btn-primary"
                                type="submit"
                            >Enviar</button>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default AddMovie
