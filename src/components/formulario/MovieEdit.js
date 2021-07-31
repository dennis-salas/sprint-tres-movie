import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Form, Button } from 'react-bootstrap'
import { useForm } from '../../hooks/useForm'
import { startSaveMovie, clearMovie } from '../../actions/actionMovie'

export const MovieEdit = () => {

    const { active } = useSelector(state => state.movie);
    let file = []
    const dispatch = useDispatch()

    const activeId = useRef(active.id)

    useEffect(() => {
        if (active.id !== activeId.current) {
            reset(active)
        }
        activeId.current = active.id
    }, [active])

    const [formValues, handleInputChange, reset] = useForm(active)

    const { title, sipnosis, gender, url } = formValues

    const handleClear = () => {
        dispatch(clearMovie())
    }

    const handleFileChange = (e) => {
        file = e.target.file[0];
        console.log('url edit cargado', file);
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleEditMovie = (e) => {
        e.preventDefault();
        console.log(formValues)
        dispatch(startSaveMovie(formValues, file))
    }
    return (
        <Container className="text-center">
            <h2>Editar Pelicula</h2>
            <p className="text-center">Agrega una Pelicula a tu colección</p>
            <Form onSubmit={handleEditMovie}>
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
                        value="Cargar imagen"
                    />
                    <button type="submit" className="btn btn-primary mt-2 mx-2">
                        Enviar
                    </button>
                </div>
            </Form>
            <Button type="submit" className="btn btn-info mt-2"
                onClick={handleClear}>
                Clear
            </Button>
        </Container>
    )
}
