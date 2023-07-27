import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Main } from '../components/Content/Main';
import { Aside } from '../components/Layout/Aside';
import { About } from '../components/Content/About';
import { Curriculum } from '../components/Content/Curriculum';
import { Portfolio } from '../components/Content/Portfolio';
import { Blog } from '../components/Content/Blog';
import { Contact } from '../components/Content/Contact';

export const RoutesPortfolio = () => {
    const handleMenu = (e) => {
        let visible = document.querySelector('.layout__aside--visible');
        if (!visible) {
            document.body.classList.add('layout__aside--visible');
            document.querySelector(
                '.layout__menu-toggle .fa-bars'
            ).style.opacity = 0;
            document.querySelector(
                '.layout__menu-toggle .fa-xmark'
            ).style.opacity = 1;
        } else {
            document.body.classList.remove('layout__aside--visible');
            document.querySelector(
                '.layout__menu-toggle .fa-bars'
            ).style.opacity = 1;
            document.querySelector(
                '.layout__menu-toggle .fa-xmark'
            ).style.opacity = 0;
        }
    };

    return (
        <BrowserRouter>
            <div className='layout'>
                {/* Barra Lateral (Info del Usuario) */}
                <Aside />

                {/* Menu Responsive */}
                <div className='layout__menu-toggle' onClick={handleMenu}>
                    <i className='fa-solid fa-bars menu-toggle__icon'></i>
                    <i className='fa-solid fa-xmark menu-toggle__icon'></i>
                </div>

                {/*} Contenido Principal */}
                <main className='layout__content'>
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/curriculum' element={<Curriculum />} />
                        <Route path='/portfolio' element={<Portfolio />} />
                        <Route path='/blog' element={<Blog />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};
