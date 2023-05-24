import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Nav } from 'react-bootstrap';

export const CardProjects = (props) => {
    console.log(props);
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={props.imgUrl} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Button variant='primary'>Go somewhere</Button>
                <Nav.Link href={props.website} variant='pill'>
                    Website
                </Nav.Link>
            </Card.Body>
        </Card>
    );
};
