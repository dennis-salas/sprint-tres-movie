import React, { useEffect, useState } from 'react';
import { firebase } from '../firebase/firebaseConfig'
import { useDispatch } from 'react-redux'
import { login } from '../actions/action';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { AuthRoute } from './AuthRoute';
import { Spinner } from 'react-bootstrap'
import { AuthPrivateRouter } from './AuthPrivateRouter';

const AppRouter = () => {

    const [checking, setChecking] = useState(true)
    const [isLooggedIn, setsIsLoogedIn] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setsIsLoogedIn(true)
            } else {
                setsIsLoogedIn(false)
            }
            setChecking(false)
        })
    }, [dispatch, setChecking])

    if (checking) {
        return (

            <Spinner animation="border" variant="dark" />, <h1>Cargando...</h1>
        )
    }
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRoute}
                        isAuthenticated={isLooggedIn}
                    />

                    <PrivateRoute
                        exact
                        path="/"
                        component={AuthPrivateRouter}
                        isAuthenticated={isLooggedIn}
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}


export default AppRouter