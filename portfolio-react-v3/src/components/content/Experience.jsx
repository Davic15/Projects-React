import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TimeLine } from './TimeLine/TimeLine';

import Timeline from '@mui/lab/Timeline';

import { jobs } from '../../data/jobs';
import './Experience.css';
import { educations } from '../../data/educations';
import { certifications } from '../../data/certifications';

export const Experience = () => {
    return (
        <section className='experience' id='experience'>
            <Container className='about-main-container' fluid>
                <Row className='about-main-container-row'>
                    <Col
                        sm={12}
                        md={12}
                        lg={12}
                        className='about-main-container-ul'
                    >
                        <h3>work Experience</h3>
                        <Timeline position='alternate'>
                            {jobs.map((job, index) => {
                                return <TimeLine key={index} {...job} />;
                            })}
                        </Timeline>
                    </Col>

                    <Col
                        sm={12}
                        md={12}
                        lg={12}
                        className='about-main-container-ul'
                    >
                        <h3>Education</h3>
                        <Timeline position='alternate'>
                            {educations.map((education, index) => {
                                return <TimeLine key={index} {...education} />;
                            })}
                        </Timeline>
                    </Col>

                    <Col
                        sm={12}
                        md={12}
                        lg={12}
                        className='about-main-container-ul'
                    >
                        <h3>Certifications</h3>
                        <Timeline position='alternate'>
                            {certifications.map((certification, index) => {
                                return (
                                    <TimeLine key={index} {...certification} />
                                );
                            })}
                        </Timeline>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
