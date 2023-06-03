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
                            I am a frontend developer based in Italy. I have
                            experience as a software engineer and as a frontend
                            developer (React) of web applications based on
                            cryptocurrencies. I am passionate about perfection,
                            the simplicity of minimalist and intuitive
                            interfaces.
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
                            With a bit of a backend too, with tools like
                            Node.js, MongoDB, and Express.js. Check my MERN
                            projects in the Projects area.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
