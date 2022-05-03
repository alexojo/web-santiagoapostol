import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { startChecking } from '../redux/actions/auth';
import { LoginScreen } from '../screens/auth/login/LoginScreen';

import { LandingPage } from '../screens/page/landing-page/LandingPage';
import { UsersRouter } from './UsersRouter';

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch( startChecking() );

    }, [dispatch])
    



    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<LandingPage />} />
                <Route path="login" element={<LoginScreen />} />

                <Route path="*" element={<UsersRouter />} />
            </Routes>
        </BrowserRouter>
    )
}

