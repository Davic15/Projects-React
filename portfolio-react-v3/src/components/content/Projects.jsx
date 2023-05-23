import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css';
import { CardProjects } from './CardProjects';

export const Projects = () => {
    return (
        <section className='projects'>
            <Container className='projects-main-container' fluid>
                <Row className='projects-main-container-row'>
                    <Col sm={12} md={12} lg={12}>
                        <h3>Projects</h3>
                        <p>
                            A set of my best project using Vanilla JavaScript,
                            React, Node.js, Redux, Express.js, and much more.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12} className='pro'>
                        <CardProjects />
                        <CardProjects />
                        <CardProjects />
                        <CardProjects />
                        <CardProjects />
                        <CardProjects />
                        <CardProjects />
                        <CardProjects />
                        <CardProjects />
                        <CardProjects />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
