import React from 'react'

import styles from './Home.module.css';
export const Home = () => {

  return (
    <div className={styles.home}>
      <h1>Welcome to Dota 2 information</h1>
      <p>Here you can find information, data, stats, and much more about Dota 2. Using the OpenDota API.</p>
      <h2 className='title'>Next updates:</h2>
      <p>See the 100 top matches live.</p>
      <p>Search an speficic match, usin the match id.</p>
      <p>Some statistics.</p>
    </div>
  )
}
