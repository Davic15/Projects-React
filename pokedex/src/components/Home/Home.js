import React, { useEffect, useState } from 'react';
import { Loader } from '../Loader/Loader';
import { PokeCard } from '../PokeCard/PokeCard';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Home.module.css';

export const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [pokeDetails, setPokeDetails] = useState([]);

    const getPokemonList = async() => {
        setIsLoading(true);

        try {
            const res = await fetch (url);
            const data = await res.json();
            getPokemonDetails(data.results);
        } catch (err) {
            throw new Error (err)
        }
        setIsLoading(false)

    }

    const getPokemonDetails = async(items) => {
        items.map(async(item) => {
            const result = await fetch(item.url)
            const data = await result.json()
            setPokeDetails(state => {
                state = [...state, data];
                state.sort((a,b)=>a.id>b.id?1:-1);
                return state
            })
        })
    }

    useEffect(() => {
        getPokemonList()
    }, [url])

    return (
        <>
        {/*<section className={styles.section}>*/}

        <Container className={styles.section}>
            <Row>
                { pokeDetails.length > 0 ? <PokeCard pokeDetails={pokeDetails} isLoading={isLoading} /> : <Loader />}
            </Row>
            <div className={styles.splitter}></div>
        </Container>
        {/*</section>*/}
        </>
    )
}
