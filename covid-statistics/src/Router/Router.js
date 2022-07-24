import React from 'react';
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';

import { Error } from '../Components/Error/Error';
import { Footer } from '../Components/Layout/Footer/Footer';
import { Header } from '../Components/Layout/Header/Header';
import { GraphData } from '../Components/Pages/GraphData/GraphData';
import { Home } from '../Components/Pages/Home/Home';
import styles from './Router.module.css';

export const Router = () => {

    return (
        <BrowserRouter>
            {/* Header Component */}
            <Header />
            {/* Content */}
            <section className={styles.container}>
                <Routes>
                    <Route path='/' element={<Navigate to='/home' />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/statistics' element={<GraphData />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </section>
            {/* Footer */}
            <Footer />
        </BrowserRouter>
    )
}
