import React from 'react';
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';

import { Error } from '../Components/Error/Error';
import { Footer } from '../Components/Layout/Footer/Footer';
import { Header } from '../Components/Layout/Header/Header';
import { Home } from '../Components/Pages/Home/Home';

export const Router = () => {

    return (
        <BrowserRouter>
            {/* Header Component */}
            <Header />
            {/* Content */}
            <section>
                <Routes>
                    <Route path='/' element={<Navigate to='/home' />} />
                    <Route path='/home' element={<Home />} />

                    <Route path='*' element={<Error />} />
                </Routes>
            </section>
            {/* Footer */}
            <Footer />
        </BrowserRouter>
    )
}
