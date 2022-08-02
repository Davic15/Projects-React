import React from 'react';
import logo from '../../../assets/logo.png';

import { Container, Navbar } from 'react-bootstrap';
import styles from './Header.module.css';

export const Header = () => {

    return (
        <>
            <Navbar bg='dark' variant='dark'>
                <Container>
                <Navbar.Brand href='#home'>
                    <img
                        alt='Pokemon Logo'
                        src={logo}
                        className={`d-inline-block align-top ${styles.logos}`}
                    />{' '}
                    Pokedex
                </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}
