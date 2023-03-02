import React from 'react';
import { Col, Nav } from 'react-bootstrap';
import './ProjectCard.css';
import githubIcon from '../../../assets/img/githubIcon.svg';
import websiteIcon from '../../../assets/img/websiteIcon.svg'

export const ProjectCard = ({ title, description, imgUrl, github, website }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className='proj-imgbx'>
                <img src={imgUrl} alt={title}/>
                <div className='proj-txtx'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br></br><br></br>
                    <div className='social-icon'>
                        <Nav.Link href={github} target='_blank' rel='noreferrer'><img src={githubIcon} alt='github' /></Nav.Link>
                        <Nav.Link href={website} target='_blank' rel='noreferrer'><img src={websiteIcon} alt='website' /></Nav.Link>
                    </div>
                </div>
            </div>
        </Col>
    )
}
