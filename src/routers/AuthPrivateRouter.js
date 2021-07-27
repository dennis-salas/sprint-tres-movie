import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import NavbarMovie from '../components/NavbarMovie'
import { App } from '../containers/App';
import { Movies } from '../containers/Movies';
import LessRatedMovies from '../containers/LessRatedMovies'
import TopRatedMovies from '../containers/TopRatedMovies'
import AddMovie from '../containers/AddMovie'

export const AuthPrivateRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <BrowserRouter>
                    <NavbarMovie />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={App}
                        />

                        <Route
                            exact
                            path="/Movies"
                            component={Movies}
                        />

                        <Route
                            exact
                            path="/LessRatedMovies"
                            component={LessRatedMovies}
                        />
                        <Route
                            exact
                            path="/TopRatedMovies"
                            component={TopRatedMovies}
                        />
                        <Route
                            exact
                            path="/AddMovie"
                            component={AddMovie}
                        />

                        <Redirect to="/" />
                    </Switch>
                </BrowserRouter>
            </div>

        </div>
    )
}