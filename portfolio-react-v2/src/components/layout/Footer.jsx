import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import logo from '../../assets/img/logo.svg';
import navIcon1 from '../../assets/img/navIcon1.svg';
import navIcon2 from '../../assets/img/github.svg';
import './Footer.css';
import { CV } from '../content/CV';

export const Footer = () => {
    const githubLink = 'https://github.com/Davic15';
    const linkedinLink =
        'https://www.linkedin.com/in/franklin-david-macias-avellan-704030188';

    return (
        <footer className='footer'>
            <Container>
                <Row className='align-items-center'>
                    <CV />
                    <Col size={12} sm={6}>
                        <img src={logo} alt='logo' />
                    </Col>
                    <Col size={12} sm={6} className='text-center text-sm-end'>
                        <div className={'social-icon'}>
                            <Nav.Link
                                href={linkedinLink}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={navIcon1} alt='linkedin' />
                            </Nav.Link>
                            <Nav.Link
                                href={githubLink}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={navIcon2} alt='github' />
                            </Nav.Link>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
