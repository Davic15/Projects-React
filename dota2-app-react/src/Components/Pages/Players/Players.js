import React, { useEffect, useState } from 'react'
import { Loader } from '../../Loader/Loader';
import { PlayerDetails } from '../PlayerDetails/PlayerDetails';

import styles from './Players.module.css';

export const Players = () => {
    const PLAYERS_URL = 'https://api.opendota.com/api/proPlayers';
    const PLAYER_URL = 'https://api.opendota.com/api/players/';
    const [isLoading, setIsLoading] = useState(false);
    const [proPlayers, setProPlayers] = useState([]);
    const [proPlayer, setProPlayer] = useState('');
    let heroData = '';

    useEffect(() => {
        const getProPlayers = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(PLAYERS_URL);
                const data = await res.json();
                setProPlayers(data.sort((a, b)=> b.name < a.name ? 1 : -1));
                setIsLoading(false)
            } catch (err) {
                throw new Error(err)
            }

        }
        getProPlayers();
    }, [])

    const handleClick = (e) => {
        const selectedIndex = e.target.options.selectedIndex;
        heroData = e.target.options[selectedIndex].getAttribute('data-key');
        getProPlayerData();
    }

    const getProPlayerData = async () => {
        try {
            setIsLoading(true);
            const res = await fetch(PLAYER_URL + heroData);
            const data = await res.json();
            setProPlayer(data);
            setIsLoading(false)
        } catch (err) {
            throw new Error(err)
        }
    }

    return (
        <div className={styles.container}>
            <h1>Pro Players Information</h1>
            {isLoading && <Loader />}
            <select className={styles.select} onChange={(e) => handleClick(e)}>
                {proPlayers.map(player => (
                    <option key={player.account_id} value={player.name} data-key={player.account_id}>
                        {player.name.trim() === "" ? player.account_id : player.name}
                    </option>
                ))}
            </select>
            <PlayerDetails proPlayer={proPlayer}/>
        </div>
    )
}
