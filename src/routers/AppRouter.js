import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { startChecking } from '../redux/actions/auth';
import { LoginScreen } from '../screens/auth/login/LoginScreen';

import { LandingPage } from '../screens/page/landing-page/LandingPage';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { UsersRouter } from './UsersRouter';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const { checking, uid } = useSelector( state => state.auth );

    useEffect(() => {
        
        dispatch( startChecking() );

    }, [dispatch])
    


    return (
        <BrowserRouter>
            <Routes>
                

                <Route path="/page" element={
                    <PublicRoute uid={ uid }>
                        <LandingPage />
                    </PublicRoute>
                } 
                />
                

                <Route path="/*"  element ={
                    <PrivateRoute uid={ uid }>
                        <UsersRouter />
                    </PrivateRoute>
                }
                />
                <Route path="/login" element={
                    <PublicRoute uid={ uid }>
                        <LoginScreen />
                    </PublicRoute>
                } 
                />
                
            </Routes>
        </BrowserRouter>
    )
}

