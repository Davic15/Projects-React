import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

export const Header = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        console.log();
        setActiveLink(value);
    };

    return (
        <BrowserRouter>
            {/*<header className='header'>*/}
            <Navbar
                className={`header header-container-navbar ${
                    scrolled ? 'scrolled' : ''
                }`}
                expand='lg'
                fixed='top'
            >
                <Container>
                    <Navbar.Brand href='#home'>WebDevFranklin</Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls='basic-navbar-nav'
                        className='header-button'
                    />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto header-container-navbar__inner'>
                            <Nav.Link
                                href='#home'
                                onClick={() => onUpdateActiveLink('home')}
                                className={
                                    activeLink === 'home'
                                        ? 'active navbar-link'
                                        : 'navbar-link'
                                }
                            >
                                Home
                            </Nav.Link>

                            <Nav.Link
                                href='#about'
                                onClick={() => onUpdateActiveLink('about')}
                                className={
                                    activeLink === 'about'
                                        ? 'active navbar-link'
                                        : 'navbar-link'
                                }
                            >
                                About me
                            </Nav.Link>
                            <Nav.Link
                                href='#projects'
                                onClick={() => onUpdateActiveLink('projects')}
                                className={
                                    activeLink === 'projects'
                                        ? 'active navbar-link'
                                        : 'navbar-link'
                                }
                            >
                                Projects
                            </Nav.Link>
                            <Nav.Link
                                href='#experience'
                                onClick={() => onUpdateActiveLink('experience')}
                                className={
                                    activeLink === 'experience'
                                        ? 'active navbar-link'
                                        : 'navbar-link'
                                }
                            >
                                Experience
                            </Nav.Link>
                            <Nav.Link
                                href='#contact'
                                onClick={() => onUpdateActiveLink('contact')}
                                className={
                                    activeLink === 'contact'
                                        ? 'active navbar-link'
                                        : 'navbar-link'
                                }
                            >
                                Contact me
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/*</header>*/}
        </BrowserRouter>
    );
};
