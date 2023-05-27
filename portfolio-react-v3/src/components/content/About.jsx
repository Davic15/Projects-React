import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

export const About = () => {
    return (
        <section className='about'>
            <Container className='about-main-container' fluid>
                <Row className='about-main-container-row'>
                    <Col sm={12} md={12} lg={6}>
                        <img
                            src='https://res.cloudinary.com/dccsb07gm/image/upload/v1684866237/portfolio/dev-frank_z8y9hj.jpg'
                            alt='hero'
                            className='img-fluid shadow-4'
                        />
                    </Col>

                    <Col sm={12} md={12} lg={6}>
                        <h3>About me</h3>

                        <p className='about-description'>
                            Hi, I'm Franklin, an Ecuadorian living in Italy. A
                            highly talented individual with good analytical
                            skills desires to work as a Frontend Web Developer,
                            where exceptional ability to accurately analyze
                            complex business system problems and provide useful
                            solutions will be needed. Bringing good knowledge of
                            HTML, CSS, JavaScript and React.js business
                            functions as well as knowledge of relevant
                            programming and software tools.
                        </p>
                        <p className='about-description'>
                            I bring with me some years of experience, and the
                            desire to learn and improve every day.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
