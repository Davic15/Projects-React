import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { About } from '../Components/About/About';
import { Introduction } from '../Components/Introduction/Introduction';
import { Footer } from '../Components/Layout/Footer';
import { Header } from '../Components/Layout/Header';
import { Services } from '../Components/Services/Services';
import { Work } from '../Components/Work/Work';

export const RoutesPortfolio = () => {
    return (
        <BrowserRouter>
        {/* Header goes here */}
        <Header />
        {/* Content */}
        <Introduction />
        <Services />
        <About />
        <Work />
        {/* Footer */}
        <Footer />
        </BrowserRouter>
    )
}
