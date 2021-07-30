import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { AddMovie } from '../actions/actionMovie'
import { useDispatch } from 'react-redux'
import { useForm } from '../hooks/useForm'
import { MovieCard } from '../components/MovieCard'

const AddNewMovie = () => {

    const dispatch = useDispatch();
    let file = [];

    const [formValue, handleInputChange, reset] = useForm({
        title: '',
        sipnosis: '',
        gender: '',
    })

    const { title, sipnosis, gender } = formValue

    const handleFileChange = (e) => {
        file = e.target.files[0];
        console.log('url cargado', file);
    }

    const handleNewMovie = (e) => {
        e.preventDefault();
        dispatch(AddMovie(formValue, file))
        reset()
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click()
    }

    return (
        <Container className="text-center">
            <h2>Adicionar Pelicula</h2>
            <p className="text-center">Agrega una Pelicula a tu colección</p>
            <Form onSubmit={handleNewMovie}>
                <Form.Control
                    type="text"
                    name="title"
                    placeholder="Nombre Pelicula"
                    value={title}
                    onChange={handleInputChange}
                    required />
                <br />
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="sipnosis"
                    placeholder="Sipnosis de la pelicula"
                    value={sipnosis}
                    onChange={handleInputChange}
                    required

                />
                <br />
                <div className="form-group">
                    <select
                        name="gender"
                        className="form-control mt-1"
                        value={gender}
                        onChange={handleInputChange}
                    >
                        <option>Elige el genero de tu pelicula</option>
                        <option>Drama</option>
                        <option>Acción</option>
                        <option>Animada</option>
                        <option>Comedia</option>
                        <option>Terror</option>
                    </select>
                </div>
                <input
                    id="fileSelector"
                    type="file"
                    name="file"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <div>
                    <input
                        type="button"
                        className="btn border-bottom shadow-sm"
                        onClick={handlePictureClick}
                        value="Carga una imagen"
                    />
                    <button type="submit" className="btn btn-primary mt-2 mx-2">
                        Enviar
                    </button>
                </div>
            </Form>
            <Container>
                <MovieCard />
            </Container>
        </Container>
    )
}

export default AddNewMovie
