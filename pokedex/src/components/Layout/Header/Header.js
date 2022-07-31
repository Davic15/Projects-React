import React from 'react';
import logo from '../../../assets/logo.png';

import { Container, Navbar } from 'react-bootstrap';
import styles from './Header.module.css';

export const Header = () => {

    return (
        <>
            <Navbar bg='dark'>
                <Container>
                    <Navbar.Brand>
                        <img
                            src={logo}
                            width='50'
                            height='50'
                            className={`d-inline-block align-top container`}
                            alt='Pokemon Logo'
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}
