import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

export const Header = () => {
    return (
        <header>
            <div className={classes.logo}>
                <img src="/img/logo.png" alt="logo" />
            </div>
            <button className={classes["nav-toggle"]} aria-label="toggle navigation">
                <span className={classes.hamburger}></span>
            </button>
            <nav className={classes.nav}>
                <ul className={classes.nav__list}>
                    <li className={classes.nav__item}>
                        <NavLink to="/home" className={classes.nav__link}>Home</NavLink>
                    </li>
                    <li className={classes.nav__item}>
                        <NavLink to="/services" className={classes.nav__link}>Services</NavLink>
                    </li>
                    <li className={classes.nav__item}>
                        <NavLink to="/about" className={classes.nav__link}>About</NavLink>
                    </li>
                    <li className={classes.nav__item}>
                        <NavLink to="/work" className={classes.nav__link}>Work</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
