import React from 'react';
import styles from './PlayerDetails.module.css';

export const PlayerDetails = (props) => {
    const defaultPlayer = {
        solo_competitive_rank: 5024,
        profile: {
            account_id: 125767523,
            personaname: "BURN BABY BURN!!!",
            name: "BURN BABY BURN!!!",
            plus: false,
            cheese: 0,
            steamid: "76561198086033251",
            avatar: "https://avatars.akamai.steamstatic.com/8b2f4c8e7734b057d5e469b31f33e933bd0934ec.jpg",
            avatarmedium: "https://avatars.akamai.steamstatic.com/8b2f4c8e7734b057d5e469b31f33e933bd0934ec_medium.jpg",
            avatarfull: "https://avatars.akamai.steamstatic.com/8b2f4c8e7734b057d5e469b31f33e933bd0934ec_full.jpg",
            profileurl: "https://steamcommunity.com/id/kadiraktass/",
            last_login: "2019-09-12T22:22:26.639Z",
            loccountrycode: null,
            status: null,
            is_contributor: false,
            is_subscriber: false
        },
        leaderboard_rank: null,
        competitive_rank: 4952,
        rank_tier: 80,
        mmr_estimate: {
            estimate: 4106
        }
    }
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
