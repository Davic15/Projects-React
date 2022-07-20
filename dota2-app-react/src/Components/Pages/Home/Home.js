import React from 'react'

import styles from './Home.module.css';
import stats from '../../../images/stats.svg';
import match from '../../../images/match.svg';
import game from '../../../images/game.svg';

export const Home = () => {

  return (
    <div className={styles.home}>
      <h1>Welcome to Dota 2 stats</h1>
      <p>Here you can find information, data, stats, and much more about Dota 2. Using the OpenDota API.</p>
      <h2 className='title'>Next updates:</h2>
      <p>See the 100 top matches live.</p>
      <p>Search an speficic match, using the match id.</p>
      <p>Some statistics.</p>
      <section className={styles['main-option']}>
        <div className={styles.option}>
          <h3>Stats</h3>
          <img src={stats} alt='dota 2 stats'></img>
        </div>
        <div className={styles.option}>
          <h3>Live Matches</h3>
          <img src={game} alt='dota 2 live matches'></img>
        </div>
        <div className={styles.option}>
          <h3>Request Match Information</h3>
          <img src={match} alt='dota 2 match information'></img>
        </div>
      </section>
    </div>
  )
}
