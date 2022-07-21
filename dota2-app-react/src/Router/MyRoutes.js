import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { Header } from "../Components/Layout/Header/Header";
import { Home } from '../Components/Pages/Home/Home';
import { Footer } from '../Components/Layout/Footer/Footer';
import { Matches } from '../Components/Pages/Matches/Matches';
import { Players } from '../Components/Pages/Players/Players';
import { Error } from '../Components/Error/Error'; 

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
                <Route path='/players' element={<Players />} />
                <Route path='*' element={<Error />} />
            </Routes>

        </section>
        {/* Footer */}
        <Footer />
    </BrowserRouter>
  )
}
