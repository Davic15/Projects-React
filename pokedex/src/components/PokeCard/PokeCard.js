import React from 'react'
import { Card, Button, Col, Row, Container } from 'react-bootstrap'
import styles from './PokeCard.module.css';
import { Loader } from '../Loader/Loader';

export const PokeCard = ({ isLoading, pokeDetails }) => {
    console.log(isLoading, pokeDetails);

    const padWithZero = (num, targetLength) => {
        return String(num).padStart(targetLength, '0');
    }

    const speciesIcon = (type) => {
        console.log(type)
        let image = '';
        let color = '';
        switch(type) {
            case 'grass':
                image = '/images/leaf.png';
                color = `${styles.grass}`
            break;

            case 'fire':
                image = '/images/fire.png';
                color = `${styles.fire}`
            break;

            case 'water':
                image = '/images/water.png';
                color = `${styles.water}`
            break;

            case 'bug':
                image = '/images/bug.png';
                color = `${styles.bug}`
            break;

            case 'normal':
                image = '/images/normal.png';
                color = `${styles.normal}`
            break;

            default:
                image = '/images/default.png';
                color = `${styles.normal}`
            break;
        }
        console.log(image)
        return [image, color];
    }

    return (
        <>
            { isLoading ? <Loader /> : pokeDetails.map(poke => {
                return (
                    <Col sm={12} md={5} lg={4} xl={3}>
                        <Card style={{ width: '18rem', height: '20rem' }} key={poke.id}>
                            <div className={`${styles.poke_image} ${speciesIcon(poke.types[0].type.name)[1]}`}>
                                <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`} className={`${styles.image}`} />
                            </div>
                            <Card.Body>
                                <Card.Title className={styles.title}>{poke.name}</Card.Title>
                                <Card.Text>
                                    {`# ${padWithZero(poke.id, 3)}`}
                                    <img src={speciesIcon(poke.types[0].type.name)[0]} alt={poke.name} className={styles.icon} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </>
    )
}