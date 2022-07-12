import React from 'react';

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
                <img src="./img/logo.png" alt="logo" />
            </div>
            <button className="nav-toggle" aria-label="toggle navigation" onClick={ handleAddClass }>
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="/home#home" className="nav__link" onClick={ handleRemoveClass }>Home</a></li>
                    <li className="nav__item"><a href="/home#services" className="nav__link" onClick={ handleRemoveClass }>My Services</a></li>
                    <li className="nav__item"><a href="/home#about" className="nav__link" onClick={ handleRemoveClass }>About me</a></li>
                    <li className="nav__item"><a href="/home#work" className="nav__link" onClick={ handleRemoveClass }>My Work</a></li>
                </ul>
            </nav>
        </header>
    )
}
