import React, { useState } from 'react'
import { Card, Col, ListGroup, Modal, Button, Container, ProgressBar } from 'react-bootstrap'
import styles from './PokeCard.module.css';
import { speciesIcon } from '../../helpers/basicInformation';
import { Loader } from '../Loader/Loader';
import { nanoid } from 'nanoid'

export const PokeCard = ({ isLoading, pokeDetails }) => {
    const [show, setShow] = useState(false);
    const [singlePokemon, setSinglePokemon] = useState({});
    const handleClose = () => setShow(false);

    const padWithZero = (num, targetLength) => {
        return String(num).padStart(targetLength, '0');
    }

    const handleShow = (id) => {
        const single = pokeDetails.filter(poke => poke.id === id);
        setSinglePokemon(single)
        setShow(true)
    }

    return (
        <>
            { isLoading ? <Loader /> : pokeDetails.map(poke => {
                return (
                    <Col sm={12} md={6} lg={4} xl={3} key={nanoid()}>
                        <Card key={poke.id} className={styles.card} onClick={() => handleShow(poke.id)}>
                            <div className={`${styles.poke_image} ${speciesIcon(poke.types[0].type.name)[1]}`}>
                                <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`} className={`${styles.image}`} />
                            </div>
                            <Card.Body>
                                <Card.Title className={styles.title}>{poke.name}</Card.Title>
                                <ListGroup className={`list-group-flush ${styles.basic}`} key={nanoid()}>
                                    <ListGroup.Item>{`#${padWithZero(poke.id, 3)}`}</ListGroup.Item>
                                    <ListGroup.Item><img src={speciesIcon(poke.types[0].type.name)[0]} alt={poke.name} className={styles.icon} /></ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
            <>
                {singlePokemon.length > 0 ? 
                    <Modal show={show} onHide={handleClose} size='lg' aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton>
                            <Modal.Title className={styles.title}>{singlePokemon[0].name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container className={`${styles.image_modal} ${speciesIcon(singlePokemon[0].types[0].type.name)[1]}`}>
                                <img src={singlePokemon[0].sprites.front_default} alt={singlePokemon[0].name} />
                            </Container>
                            <hr />

                            <Container>
                                <p className={styles.title}>Types</p>
                                    {
                                        singlePokemon[0].types.map((data, index) => { return (
                                            <>
                                                <div className={styles.types} key={index}>
                                                    <p className={styles.upper}>{data.type.name}</p> 
                                                    <img src={speciesIcon(data.type.name)[0]} alt={singlePokemon[0].name} className={styles.icon} />
                                                </div>
                                            </>
                                    ) })}
                            </Container>
                            <hr />

                            <p className={styles.title}>Description</p>
                            <Container className={styles.extra}>
                                <div className={styles.extra_one}>
                                    <p className={styles.title_modal}>Height</p>
                                    <p>{Math.round(singlePokemon[0].height * 0.1).toFixed(2)} m</p>
                                </div>
                                <div className={styles.extra_two}>
                                    <p className={styles.title_modal}>Weight</p>
                                    <p>{singlePokemon[0].weight * 0.1} kg</p>
                                </div>
                                <div className={styles.extra_three}>
                                    <p className={styles.title_modal}>Abilities</p>
                                    {singlePokemon[0].abilities.map((data, index) => { return <p className={styles['upper_type']} key={index}>{data.ability.name}</p>})}
                                </div>
                            </Container>
                            <hr />

                            <p className={styles.title}>Stats</p>
                            <Container>
                                {singlePokemon[0].stats.map((data, index) => {
                                    return (
                                    <div className={styles.stats} key={index}>
                                        <p className={styles.upper_type}>{data.stat.name}</p>
                                        <ProgressBar variant='danger' animated now={data.base_stat} label={data.base_stat + ' p'}/>
                                    </div>
                                    )
                                })}
                            </Container>
                            
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='secondary' onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                : ''}
            </>
        </>
    )
}
