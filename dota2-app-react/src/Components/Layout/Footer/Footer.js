import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className={styles.footer}>
            Website designed and coded by <a href="" target="_blank" rel="noreferrer">Franklin Macias</a>. Copyright &copy; {year}.
        </footer>
    )
}
