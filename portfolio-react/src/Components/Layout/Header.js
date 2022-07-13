import React from 'react';
import { HashLink } from 'react-router-hash-link'

export const Header = () => {

    const handleAddClass = (e) => {
        document.body.classList.toggle("nav-open")
    }

    const handleRemoveClass = (e) => {
        document.body.classList.remove("nav-open");
    }

    return (
        <header>
            <div className="logo">
                <img src="/img/logo.png" alt="logo" />
            </div>
            <button className="nav-toggle" aria-label="toggle navigation" onClick={ handleAddClass }>
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><HashLink smooth to={'/home#home'} className="nav__link" onClick={ handleRemoveClass }>Home</HashLink></li>
                    <li className="nav__item"><HashLink smooth to={'/home#services'} className="nav__link" onClick={ handleRemoveClass }>My Services</HashLink></li>
                    <li className="nav__item"><HashLink smooth to={'/home#about'} className="nav__link" onClick={ handleRemoveClass }>About me</HashLink></li>
                    <li className="nav__item"><HashLink smooth to={'/home#work'} className="nav__link" onClick={ handleRemoveClass }>My Work</HashLink></li>
                </ul>
            </nav>
        </header>
    )
}
