import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard/ProjectCard';
import colorSharp2 from '../../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { javaScriptProjects } from '../../data/javaScriptProjects';
import { reactProjects } from '../../data/reactProjects';
import { reactReduxProjects } from '../../data/reactReduxProjects';
import './Project.css';

export const Project = () => {
    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                                    <h2>Projects</h2>
                                    <p>A selection of my range of work using different technologies.</p>
                                    <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                                        <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                            <Nav.Item>
                                                <Nav.Link eventKey='first'>JS</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey='second'>React</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey='third'>Redux</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id='slideInUp' className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                                            <Tab.Pane eventKey='first'>
                                                <Row>
                                                    {
                                                        javaScriptProjects.map((project, index) => {
                                                            return (
                                                                <ProjectCard key={index} {...project} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey='second'>
                                                <Row>
                                                    {
                                                        reactProjects.map((project, index) => {
                                                            return (
                                                                <ProjectCard key={index} {...project} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey='third'>
                                                <Row>
                                                    {
                                                        reactReduxProjects.map((project, index) => {
                                                            return (
                                                                <ProjectCard key={index} {...project} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
                <img className='background-image-right' src={colorSharp2} alt='background' />
            </Container>
        </section>
    )
}
