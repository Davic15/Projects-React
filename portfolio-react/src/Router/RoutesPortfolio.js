import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Footer } from '../Components/Layout/Footer';
import { Header } from '../Components/Layout/Header';
import { Error } from '../Components/Error/Error';
import { Main } from '../Components/Main/Main';
import { ProjectItems } from '../Components/ProjectItems/ProjectItems';

export const RoutesPortfolio = () => {
    return (
        <BrowserRouter>
            {/* Header goes here */}
            <Header />
            
            {/* Content */}
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Main />} />
                <Route path="/project/:id" element={<ProjectItems />} />
                <Route path="*" element={<Error />} />
            </Routes>

            {/* Footer */}
            <Footer />

        </BrowserRouter>
    )
}
