import React from 'react';
import styles from './Loader.module.css';
import spinner from '../../Images/spinner.gif';

export const Loader = () => {
  return (
    <div className={styles.loader}>
        <img src={spinner} alt="Loading" />
        <h1>Fetching Data</h1>
    </div>
  )
}
