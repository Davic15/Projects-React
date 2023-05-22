import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

export const Header = () => {
    return (
        <header className='header'>
            <Navbar className='header-container-navbar' expand='lg'>
                <Container>
                    <Navbar.Brand href='#home'>WebDevFranklin</Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls='basic-navbar-nav'
                        className='header-button'
                    />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto header-container-navbar__inner'>
                            <Nav.Link href='#home'>Home</Nav.Link>
                            <Nav.Link href='#link'>Projects</Nav.Link>
                            <Nav.Link href='#home'>Experience</Nav.Link>
                            <Nav.Link href='#link'>Contact me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
