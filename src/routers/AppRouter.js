import React from 'react'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import { LandingPage } from '../screens/page/landing-page/LandingPage';
import { UsersRouter } from './UsersRouter';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<LandingPage />} />
                <Route path="*" element={<UsersRouter />} />
            </Routes>
        </BrowserRouter>
    )
}

