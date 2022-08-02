import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={`text-center text-white fixed-bottom ${styles.footer}`}>
            <Container ></Container>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    Gotta Catch ‘Em All!
                </div>
        </footer>
    )
}
