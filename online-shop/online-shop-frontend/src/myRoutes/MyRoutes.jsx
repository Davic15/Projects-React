import React from 'react';
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart } from '../components/Cart';
import { Home } from '../components/Home';
import { NavBar } from '../components/NavBar';
import { NotFound } from '../components/NotFound';
import 'react-toastify/dist/ReactToastify.css';

export const MyRoutes = () => {
    return (
        <BrowserRouter>
        <ToastContainer />
            <NavBar />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
