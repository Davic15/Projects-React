import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Error.module.css';

export const Error = () => {

    return (
        <div className={styles.container}>
            <p className={styles.message}>Error 404. Page requested not found.</p>
            <Link to='/home'>Home</Link>
        </div>
    )
}
