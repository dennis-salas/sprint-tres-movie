import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { AddMovieForm } from '../components/formulario/AddMovieForm'
import { MovieCard } from '../components/MovieCard'
import { MovieEdit } from '../components/formulario/MovieEdit'



const AddNewMovie = () => {

    const { active } = useSelector(state => state.movie)


    return (
        <Container>
            {
                (active)
                    ? <MovieEdit />
                    : <AddMovieForm />
            }
            <MovieCard />
        </Container>
    )
}

export default AddNewMovie
