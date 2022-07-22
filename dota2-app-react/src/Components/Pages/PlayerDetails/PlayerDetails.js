import React from 'react';
import { defaultPlayer } from '../../../data/defaultData';
import styles from './PlayerDetails.module.css';


export const PlayerDetails = (props) => {

    const data = props.proPlayer || defaultPlayer;

    return (
        <div className={styles.container}>
            <h2>{data.profile.name}</h2>
            <div className={styles.image}>
                <img src={data.profile.avatarfull} alt={data.profile.name}/>
            </div>
            <h3>Rank Data</h3>
            <div className={styles.stats}>
                <p>Competitive rank: <strong>{data.competitive_rank}</strong></p>
                <p>Leaderboard rank: <strong>{data.leaderboard_rank}</strong></p>
                <p>Rank Tier: <strong>{data.rank_tier}</strong></p>
                <p>Solo Competitive Rank: <strong>{data.solo_competitive_rank}</strong></p>
                <p>Stimate MMR: <strong>{data.mmr_estimate.estimate}</strong></p>
            </div>
            <h3>Other info</h3>
            <div className={styles.extra}>
                <p>Other nickname: <strong>{data.profile.personaname}</strong></p>
                <p>Last Login: <strong>{data.profile.last_login}</strong></p>
                <p>Country: <strong>{data.profile.loccountrycode}</strong></p>
                <p>Steam ID: <strong>{data.profile.steamid}</strong></p>
            </div>
            <h3>Link to Steam Profile</h3>
            <div className={styles.link}>
                <a href={data.profile.profileurl} target='_blank' rel='noreferrer'>{data.profile.name}</a>
            </div>
        </div>  
    )
}
