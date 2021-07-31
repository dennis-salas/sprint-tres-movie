import React from 'react'
import { Navbar, Container, Button, Image, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startLogout } from '../actions/action'

const NavbarMovie = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link className="nav-link" to="/"><Image src="https://i.ibb.co/x63Snx2/logo-block-Buster.png" alt="logo" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/Movies">Todas </Link>
                        <Link className="nav-link" to="/TopRatedMovies" >Lo mas valorados</Link>
                        <Link className="nav-link" to="/LessRatedMovies">Proximamente</Link>
                        <Link className="nav-link" to="/AddNewMovie">Agregar pelicula</Link>
                    </Nav>
                    <Nav>
                        <Button
                            onClick={handleLogout}
                        >Cerrar Sesión</Button>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default NavbarMovie