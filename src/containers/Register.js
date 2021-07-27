import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { useForm } from '../hooks/useForm'
import { registroPersona } from '../actions/action'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Register = () => {
    const dispatch = useDispatch();
    const [formValues, handleInputChange, reset] = useForm({
        nombre: '',
        apellido: '',
        email: '',
        telefono: ''
    })

    const { nombre, apellido, email, telefono } = formValues

    const handleRegistro = (e) => {
        e.preventDefault();
        console.log(nombre, apellido, email, telefono);
        dispatch(registroPersona(nombre, apellido, email, telefono))
        reset();
    }

    return (
        <Container>
            <Container className="w-25 my-5 border border-dark p-2">
                <Form onSubmit={handleRegistro}>
                    <div>
                        <div>
                            <h2 className="text-center">Registro</h2>
                            <p className="text-center">Registra tus datos</p>
                        </div>
                        <br />
                        <div>
                            <Form.Control
                                type="text"
                                name="nombre"
                                placeholder="nombre"
                                value={nombre}
                                onChange={handleInputChange}
                                required />
                            <br />
                            <Form.Control
                                type="text"
                                name="apellido"
                                placeholder="Apellido"
                                value={apellido}
                                onChange={handleInputChange}
                                required />
                            <br />
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={handleInputChange}
                                required />
                            <br />
                            <Form.Control
                                type="number"
                                name="telefono"
                                placeholder="telefono"
                                value={telefono}
                                onChange={handleInputChange}
                                required />
                            <br />
                            <button
                                className="btn btn-primary"
                                type="submit"
                            >Guardar</button>
                        </div>
                    </div>
                    <Link
                        to="/auth/Login"
                        className="link"
                    >
                        Inicia Sesión
                    </Link>
                </Form>
            </Container>
        </Container>
    )
}

export default Register