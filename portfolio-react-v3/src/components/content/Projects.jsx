import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css';
import { CardProjects } from './CardProjects';
import { projects } from '../../data/projects';

export const Projects = () => {
    return (
        <section className='projects' id='projects'>
            <Container className='projects-main-container' fluid>
                <Row className='projects-main-container-row'>
                    <Col sm={12} md={12} lg={12}>
                        <h3>Projects</h3>
                        <p className='project-paragraph'>
                            A set of my best project using Vanilla JavaScript,
                            React, Node.js, Redux, Express.js, and much more.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12} className='pro'>
                        {projects.map((project, index) => {
                            return <CardProjects key={index} {...project} />;
                        })}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
