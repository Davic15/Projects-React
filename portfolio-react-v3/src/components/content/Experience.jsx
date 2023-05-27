import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import BookIcon from '@mui/icons-material/Book';
import TabletIcon from '@mui/icons-material/Tablet';
import CellphoneIcon from '@mui/icons-material/PhoneAndroid';
import WebIcon from '@mui/icons-material/LaptopChromebook';
import SoftwareIcon from '@mui/icons-material/Code';

import './Experience.css';

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
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    variant='body2'
                                    color='#fefefe'
                                >
                                    May 2023 - Today
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot
                                        color='primary'
                                        variant='outlined'
                                    >
                                        <WebIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant='h6' component='span'>
                                        Frontend Web Developer (Freelancer)
                                    </Typography>
                                    <Typography>
                                        Frontend Web developer at Chocosfera
                                        S.R.L.
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align='right'
                                    variant='body2'
                                    color='#fefefe'
                                >
                                    Sep 2020 - Jan 2021
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot>
                                        <SoftwareIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant='h6' component='span'>
                                        Frontend Web Developer
                                    </Typography>
                                    <Typography>
                                        University Project (Politecnico di
                                        Torino). Web Application focused on
                                        booking seats and classrooms at an
                                        educational level during the pandemic.
                                        Technologies used: HTML, CSS,
                                        JavaScript, React, Nodejs.
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    variant='body2'
                                    color='#fefefe'
                                >
                                    Mar 2018 - Jun 2018
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot color='primary'>
                                        <CellphoneIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant='h6' component='span'>
                                        Android Developer
                                    </Typography>
                                    <Typography>
                                        University Project (Politecnico di
                                        Torino). Android-based application that
                                        allows you to lend and return books.
                                        Technologies used: Java, Android Studio
                                        and Firebase.
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    variant='body2'
                                    color='#fefefe'
                                >
                                    Nov 2012 - Dec 2013
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot
                                        color='primary'
                                        variant='outlined'
                                    >
                                        <WebIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant='h6' component='span'>
                                        Software Engineer
                                    </Typography>
                                    <Typography>
                                        Farmacias Santa Martha (Pharmaceutical
                                        company). Development, maintenance and
                                        updating of the computer system
                                        (purchases, sales, dispatch, etc.).
                                        Technologies used: Visual Basic 6,
                                        Microsoft SQL 2005 and Windows Server
                                        2008.
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
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
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    variant='body2'
                                    color='#fefefe'
                                >
                                    Sep 2014 - Today
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot
                                        color='primary'
                                        variant='outlined'
                                    >
                                        <BookIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant='h6' component='span'>
                                        Politecnico di Torino
                                    </Typography>
                                    <Typography>
                                        Master's degree, Computer Software
                                        Engineering.
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align='right'
                                    variant='body2'
                                    color='#fefefe'
                                >
                                    2006 - 2012
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot>
                                        <TabletIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant='h6' component='span'>
                                        Universidad Laica Eloy Alfaro de Manabi.
                                    </Typography>
                                    <Typography>
                                        Bachelor's degree, Computer Software
                                        Engineering.
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
