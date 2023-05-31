import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import navIcon1 from '../../assets/navIcon1.svg';
import navIcon2 from '../../assets/github.svg';
import './Footer.css';

export const Footer = () => {
    const githubLink = 'https://github.com/Davic15';
    const linkedinLink =
        'https://www.linkedin.com/in/franklin-david-macias-avellan-704030188';
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-items-center'>
                    <Col size={12} sm={12} className='text-center text-sm-end'>
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
