import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.css';
import hero from '../../assets/hero.svg';

export const Hero = () => {
    return (
        <section className='hero' id='home'>
            <Container className='hero-main-container' fluid>
                <Row className='hero-main-container-row'>
                    <Col sm={12} md={12} lg={3}>
                        <h1>Franklin David Macias Avellan</h1>

                        <p className='hero-paragraph'>
                            Hello, welcome to my portfolio, nice to meet you.
                            Feel free to check out my projects and contact
                            information.
                        </p>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <img
                            src={hero}
                            alt='hero'
                            className='img-fluid shadow-4'
                        />
                    </Col>
                    <Col sm={12} md={12} lg={3}>
                        <h2>Frontend Web Developer</h2>

                        <p className='hero-paragraph'>
                            With a bit of Backend too, with tools like Node.js,
                            MongoDB and Express.js.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
