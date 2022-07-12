import React from 'react';
import classes from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={classes.footer}>
            <a href="mailto:franklindavid.maciasavellan@gmail.com" className={classes.footer__link}>franklindavid.maciasavellan@gmail.com</a>
            <ul className={classes["social-list"]}>
                <li className={classes["social-list__item"]}>
                    <a className={classes["social-list__link"]} href="https://www.linkedin.com/in/franklin-david-macias-avellan-704030188/" target="_blank" rel="noreferrer">
                        <i className={"fab fa-linkedin"}></i>
                    </a>
                </li>
                <li className={classes["social-list__item"]}>
                    <a className={classes["social-list__link"]} href="https://github.com/Davic15" target="_blank" rel="noreferrer">
                        <i className={"fab fa-github"}></i>
                    </a>
                </li>
                <li className={classes["social-list__item"]}>
                    <a className={classes["social-list__link"]} href="file/Franklin_Resume.pdf" target="_blank">
                        <i className={"fas fa-file"}></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}
