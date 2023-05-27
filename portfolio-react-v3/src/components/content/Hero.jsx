import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.css';
import hero from '../../assets/hero.svg';

export const Hero = () => {
    return (
        <section className='hero'>
            <Container className='hero-main-container' fluid>
                <Row className='hero-main-container-row'>
                    <Col sm={12} md={12} lg={3}>
                        <h1>Franklin David Macias Avellan</h1>

                        <p className='hero-paragraph'>
                            Nice to meet you. I have experience as a front-end
                            developer and have good knowledge of HTML, CSS,
                            JavaScript (ES6), Bootstrap, React.js and Redux.
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
                            With a bit of Back-end too, with tools like Node.js,
                            MongoDB and Express.js.
                        </p>
                        <p className='hero-paragraph'>
                            Check out my portfolio, projects, resume and get in
                            touch with me.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
