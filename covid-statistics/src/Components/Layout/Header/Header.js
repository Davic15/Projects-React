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
                        <NavLink to='/matches' className={({isActive}) => isActive ? styles.active : ''}>Information</NavLink>
                    </li>
                    <li>
                        <NavLink to='/players' className={({isActive}) => isActive ? styles.active : ''}>Players</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
