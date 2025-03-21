import React from 'react';
import {NavBar} from './NavBar';

export const Aside = ({show}) => {
    return (
        <aside className={`layout__aside ${show ? 'layout__aside--visible' : ''}`}>
            <section className='aside__user-info'>
                {/* General Information */}
                <div className='user-info__general'>
                    <div className='user-info__container-image'>
                        <img
                            src='https://res.cloudinary.com/dccsb07gm/image/upload/v1735896713/portfolio/m6owqlcvaxplc4zwpy2j.jpg'
                            alt='perfil de usuario'
                            className='user-info__image'
                        />
                    </div>
                    <h2 className='user-info__name'>Franklin Macias</h2>
                    <h4 className='user-info__job'>Frontend Web Developer</h4>
                </div>
                <NavBar/>

                {/* Social Networks */}
                <div className='user-info__links'>
                    <ul className='links__social'>
                        <li className='social__option'>
                            <a href='https://github.com/Davic15' className='social__link' target='_blank'>
                                <i className='social__icon fa-brands fa-github'></i>
                            </a>
                        </li>
                        <li className='social__option'>
                            <a href='https://www.linkedin.com/in/franklin-david-macias-avellan/'
                               className='social__link' target='_blank'>
                                <i className='social__icon fa-brands fa-linkedin'></i>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* CV Download */}
                <div className='user-info__buttons'>
                    <a href='https://drive.google.com/file/d/1BoRx0fghcz7_IRygZDtbCFUCS7tOrlTF/view?usp=sharing'
                       className='user-info__btn' target='_blank'>
                        Download CV
                    </a>
                </div>

                {/*  Footer */}
                <footer className='user-info__footer'>
                    &copy; 2025 Franklin Macias.
                </footer>
            </section>
        </aside>
    );
};
