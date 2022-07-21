import React from 'react'
import styles from './MatchesItems.module.css'

import {nanoid} from 'nanoid';

export const MatchesItems = (props) => {
    const ICON_URL = 'http://api.opendota.com';
    const matches = props.matchesFetched;
    const icons = props.iconsFetched;

    const getIConHero = (heroId) => {
        const heroIcon = icons.filter(icon => icon.hero_id === heroId)
        return [heroIcon[0].icon, heroIcon[0].localized_name]
    }

    return (
        <section className={styles.section}>
            {matches.slice(90).map((data) => {
                return (
                    <div key={nanoid()} className={styles['inner-section']}>
                        <div className={styles['team-radiant']}>
                            <h3>Team Radiant</h3>
                            {data.players.slice(0, 5).map((player) => {
                                return (
                                    <span className={styles['icon-hero']} key={nanoid()}>
                                        <img src={`${ICON_URL + getIConHero(player.hero_id)[0]}`} alt={getIConHero(player.hero_id)[1]}></img>
                                        <p>{player.name || player.account_id}</p>
                                    </span>
                                )
                            })}
                            
                        </div>
                        <div className={styles['team-dire']}>
                            <h3>Team Dire</h3>
                            {data.players.slice(5, 10).map((player) => {
                                return (
                                    <span className={styles['icon-hero']} key={nanoid()}>
                                        <img src={`${ICON_URL + getIConHero(player.hero_id)[0]}`} alt={getIConHero(player.hero_id)[1]}></img>
                                        <p>{player.name || player.account_id}</p>
                                    </span>
                                )
                            })}
                        </div>

                        <div className={styles.data}>
                            <h3>Stats</h3>
                            <p>Average MMR: <strong>{data.average_mmr}</strong></p>
                            <p>Delay: <strong>{data.delay} sec</strong></p>
                            <p>Match ID: <strong>{data.match_id}</strong></p>
                            <p>Spectators: <strong>{data.spectators}</strong></p>
                            <p>Game time: <strong>{Math.floor(data.game_time / 60)} min</strong></p>
                            <p>Radiant Score: <strong>{data.radiant_score}</strong></p>
                            <p>Dire Score: <strong>{data.dire_score}</strong></p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}
