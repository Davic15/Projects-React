import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Footer } from '../Components/Layout/Footer';
import { Header } from '../Components/Layout/Header';
import { Error } from '../Components/Error/Error';
import { Main } from '../Components/Main/Main';
import { ProjectItems } from '../Components/ProjectItems/ProjectItems';
import useGATracker from '../useGATracker';

export const RoutesPortfolio = () => {

    useGATracker();

    return (
        
        <BrowserRouter basename={process.env.PUBLIC_URL} >
            {/*<HashRouter basename={process.env.PUBLIC_URL} >*/}

            {/* Header goes here */}
            <Header />
            
            {/* Content */}
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Main />} />
                <Route path="/projectitem/:id" element={<ProjectItems />} /> 

                <Route path="/404" element={<Error />} />
                <Route path="*" element={<Navigate replace to="/404" />} />
                {/*<Route path="*" element={<Error />} />*/}
            </Routes>

            {/* Footer */}
            <Footer />

        </BrowserRouter>
    )
}
