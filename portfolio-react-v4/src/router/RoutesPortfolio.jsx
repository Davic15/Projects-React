import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Main } from '../components/Content/Main';
import { Aside } from '../components/Layout/Aside';
import { About } from '../components/Content/About';
import { Curriculum } from '../components/Content/Curriculum';
import { Portfolio } from '../components/Content/Portfolio';
import { Blog } from '../components/Content/Blog';
import { Contact } from '../components/Content/Contact';

export const RoutesPortfolio = () => {
    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false);

    const handleMenu = () => {
        if (!visible) {
            setVisible(true);
            setShow(true);
        } else {
            setVisible(false);
            setShow(false);
        }
    };

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(window.innerWidth);
        };

        if (parseInt(windowSize) <= 1060) {
            setShow(false);
            setVisible(false);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [windowSize]);

    return (
        <BrowserRouter>
            <div className='layout'>
                {/* Barra Lateral (Info del Usuario) */}
                <Aside show={show} />

                {/* Menu Responsive */}
                <div className='layout__menu-toggle' onClick={handleMenu}>
                    <i
                        className='fa-solid fa-bars menu-toggle__icon'
                        style={!visible ? { opacity: 1 } : { opacity: 0 }}
                    ></i>
                    <i
                        className='fa-solid fa-xmark menu-toggle__icon'
                        style={visible ? { opacity: 1 } : { opacity: 0 }}
                    ></i>
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
