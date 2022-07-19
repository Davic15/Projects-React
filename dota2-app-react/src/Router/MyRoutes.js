import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { Header } from "../Components/Layout/Header/Header";
import { Home } from '../Components/Pages/Home/Home';
import { Footer } from '../Components/Layout/Footer/Footer';
import { Matches } from '../Components/Pages/Matches/Matches';

import styles from './MyRoutes.module.css';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
        {/* Header - Navigation */}
        <Header />
        {/* Content */}
        <section className={styles.content}>
            <Routes>
                <Route path='/' element={<Navigate to='/home' />} />
                <Route path='/home' element={<Home />} />
                <Route path='/matches' element={<Matches />} />
            </Routes>

        </section>
        {/* Footer */}
        <Footer />
    </BrowserRouter>
  )
}
