import React from 'react';
import Card from 'react-bootstrap/Card';
import { Nav } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { AiFillChrome } from 'react-icons/ai';

import './CardProjects.css';

export const CardProjects = (props) => {
    console.log(props);
    return (
        <Card style={{ width: '18rem' }} className='main-card'>
            <Card.Img variant='top' src={props.imgUrl} />
            <Card.Body className='main-card-body'>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text className='card-text-custom'>
                    {props.description}
                </Card.Text>
                <Nav.Link
                    href={props.github}
                    target='_blank'
                    className='btn-custom_new'
                >
                    <FaGithub />
                </Nav.Link>
                <Nav.Link
                    href={props.website}
                    target='_blank'
                    className='btn-custom_new'
                >
                    <AiFillChrome />
                </Nav.Link>
            </Card.Body>
        </Card>
    );
};
