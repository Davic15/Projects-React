import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {

    return (
        <header className={styles.header}>
            <div>
                <img src='' alt=''/>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/home' className={({isActive}) => isActive ? styles.active : ''}>World Map</NavLink>
                    </li>
                    <li>
                        <NavLink to='/statistics' className={({isActive}) => isActive ? styles.active : ''}>Cases Data</NavLink>
                    </li>
                    <li>
                        <NavLink to='/vaccine' className={({isActive}) => isActive ? styles.active : ''}>Vaccine</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
