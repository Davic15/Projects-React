import React from 'react';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import { Cart } from '../components/Cart';
import { Home } from '../components/Home';
import { NavBar } from '../components/NavBar';

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}
