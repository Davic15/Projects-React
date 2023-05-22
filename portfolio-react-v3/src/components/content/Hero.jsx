import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.css';
import hero from '../../assets/hero.svg';

export const Hero = () => {
    return (
        <section className='hero'>
            <Container className='hero-main-container' fluid>
                <Row className='hero-main-container-row'>
                    <Col sm={12} md={3} lg={3}>
                        <h1>Franklin David Macias Avellan</h1>
                        <p>
                            Nice to meet you. I have experience as a front-end
                            developer and have good knowledge of HTML, CSS,
                            JavaScript (ES6), Bootstrap, React.js, Redux,
                            Node.js, MongoDB and Express.js.
                        </p>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <img
                            src={hero}
                            alt='hero'
                            className='img-fluid shadow-4'
                        />
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <h2>Frontend Web Developer</h2>
                        <p>With a bit of Back-end too.</p>
                        <p>Email</p>
                        <p>+393792742621</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
