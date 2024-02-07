import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='layout__header'>
            <div className="header__container">
                <p className="header__description-text">Metadata Cleaner</p>
            </div>

            <nav className="header__nav">
                <ul className="nav__navigation">
                    <li className="navigation__item">
                        <a href="#" className="navigation__item-link">Home</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__item-link">Help</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header
