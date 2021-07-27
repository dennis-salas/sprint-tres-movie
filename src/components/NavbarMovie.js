import React from 'react'
import { Navbar, Container, Button, Image, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarMovie = () => {


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
                        <Link className="nav-link" to="/TopRatedMovies" >Mas valoradas</Link>
                        <Link className="nav-link" to="/LessRatedMovies">Menos valoradas</Link>
                        <Link className="nav-link" to="/AddMovie">Agregar pelicula </Link>
                        <Link className="nav-link" to="/auth/login"
                        >Cerrar Sesión</Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default NavbarMovie