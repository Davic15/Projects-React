import React from 'react'
import { Card, Col, ListGroup } from 'react-bootstrap'
import styles from './PokeCard.module.css';
import { speciesIcon } from '../../helpers/basicInformation';
import { Loader } from '../Loader/Loader';
import { nanoid } from 'nanoid'

export const PokeCard = ({ isLoading, pokeDetails }) => {
    console.log(pokeDetails)
    const padWithZero = (num, targetLength) => {
        return String(num).padStart(targetLength, '0');
    }

    const displayDetails = (id) => {
        console.log(id)
    }

    return (
        <>
            { isLoading ? <Loader /> : pokeDetails.map(poke => {
                return (
                    <Col sm={12} md={6} lg={4} xl={3} key={nanoid()}>
                        <Card key={poke.id} className={styles.card} onClick={() => displayDetails(poke.id)}>
                            <div className={`${styles.poke_image} ${speciesIcon(poke.types[0].type.name)[1]}`}>
                                <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`} className={`${styles.image}`} />
                            </div>
                            <Card.Body>
                                <Card.Title className={styles.title}>{poke.name}</Card.Title>
                                <ListGroup className={`list-group-flush ${styles.basic}`}>
                                    <ListGroup.Item>{`# ${padWithZero(poke.id, 3)}`}</ListGroup.Item>
                                    <ListGroup.Item><img src={speciesIcon(poke.types[0].type.name)[0]} alt={poke.name} className={styles.icon} /></ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </>
    )
}
