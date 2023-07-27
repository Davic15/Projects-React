import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    /* <li>
    <NavLink to='/home' className={({isActive}) => isActive ? styles.active : ''}>World Map</NavLink>
    </li>*/
    return (
        <nav className='layout__menu'>
            <ul className='menu__list'>
                <li className='menu__option'>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            ['menu__link', isActive ? 'menu__link--active' : '']
                                .filter(Boolean)
                                .join(' ')
                        }
                    >
                        <i className='menu__icon fa-solid fa-house'></i>
                        <span className='menu__overlay'>Home</span>
                    </NavLink>
                </li>

                <li className='menu__option'>
                    <NavLink
                        to='/about'
                        className={({ isActive }) =>
                            ['menu__link', isActive ? 'menu__link--active' : '']
                                .filter(Boolean)
                                .join(' ')
                        }
                    >
                        <i className='menu__icon fa-solid fa-user'></i>
                        <span className='menu__overlay'>About me</span>
                    </NavLink>
                </li>

                <li className='menu__option'>
                    <NavLink
                        to='/curriculum'
                        className={({ isActive }) =>
                            ['menu__link', isActive ? 'menu__link--active' : '']
                                .filter(Boolean)
                                .join(' ')
                        }
                    >
                        <i className='menu__icon fa-solid fa-graduation-cap'></i>
                        <span className='menu__overlay'>Curriculum</span>
                    </NavLink>
                </li>

                <li className='menu__option'>
                    <NavLink
                        to='/portfolio'
                        className={({ isActive }) =>
                            ['menu__link', isActive ? 'menu__link--active' : '']
                                .filter(Boolean)
                                .join(' ')
                        }
                    >
                        <i className='menu__icon fa-solid fa-briefcase'></i>
                        <span className='menu__overlay'>Portfolio</span>
                    </NavLink>
                </li>

                <li className='menu__option'>
                    <NavLink
                        to='/blog'
                        className={({ isActive }) =>
                            ['menu__link', isActive ? 'menu__link--active' : '']
                                .filter(Boolean)
                                .join(' ')
                        }
                    >
                        <i className='menu__icon fa-solid fa-book'></i>
                        <span className='menu__overlay'>Blog</span>
                    </NavLink>
                </li>

                <li className='menu__option'>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                            ['menu__link', isActive ? 'menu__link--active' : '']
                                .filter(Boolean)
                                .join(' ')
                        }
                    >
                        <i className='menu__icon fa-solid fa-envelope'></i>
                        <span className='menu__overlay'>Contact</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
