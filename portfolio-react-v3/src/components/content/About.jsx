import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

export const About = () => {
    return (
        <section className='about'>
            <Container className='about-main-container' fluid id='about'>
                <Row className='about-main-container-row'>
                    <Col sm={12} md={12} lg={6}>
                        <img
                            src='https://res.cloudinary.com/dccsb07gm/image/upload/v1685831180/portfolio/dev-frank-new-crop_u9bptb.png'
                            alt='hero'
                            className='img-fluid shadow-4'
                        />
                    </Col>

                    <Col sm={12} md={12} lg={6}>
                        <h3>About me</h3>

                        <p className='about-description'>
                            In 2020, I decided to deepen my knowledge of web
                            development, with the experience I had in my first
                            job, I wanted to go further and develop professional
                            web pages and web applications. I wanted to deepen
                            my knowledge not only in the logic of the project,
                            but also in the details, the user experience,
                            compatibility with different browsers, among other
                            things.
                        </p>
                        <p className='about-description'>
                            Now I am focused on development with React and web
                            applications with the MERN stack, and in the future
                            be Fullstack and also dabble in mobile development
                            using JavaScript (React Native).
                        </p>
                        <p className='about-description'>
                            In my free time I like to practice martial arts,
                            play Dota 2, chat with friends and learn new things.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
