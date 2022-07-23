import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className={styles.footer}>
            <p>
                Website designed and coded by <a href="https://davic15.github.io/home" target="_blank" rel="noreferrer"><strong>Franklin Macias.</strong></a>
            </p>
            <p>
            Copyright &copy; {year}.
            </p>
        </footer>
    )
}
