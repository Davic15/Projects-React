import React from 'react';
import { NavBar } from './NavBar';

export const Aside = () => {
    return (
        <aside className='layout__aside'>
            <section className='aside__user-info'>
                {/* Informacion General */}
                <div className='user-info__general'>
                    <div className='user-info__container-image'>
                        <img
                            src='https://res.cloudinary.com/dccsb07gm/image/upload/v1685831180/portfolio/dev-frank-new-crop_u9bptb.png'
                            alt='perfil de usuario'
                            className='user-info__image'
                        />
                    </div>
                    <h2 className='user-info__name'>Franklin Macias</h2>
                    <h4 className='user-info__job'>Frontend Web Developer</h4>
                </div>
                <NavBar />

                {/* Links a redes sociales */}
                <div className='user-info__links'>
                    <ul className='links__social'>
                        <li className='social__option'>
                            <a
                                href='https://github.com/Davic15'
                                className='social__link'
                                target='_blank'
                            >
                                <i className='social__icon fa-brands fa-github'></i>
                            </a>
                        </li>
                        <li className='social__option'>
                            <a
                                href='https://www.linkedin.com/in/franklin-david-macias-avellan-704030188/'
                                className='social__link'
                                target='_blank'
                            >
                                <i className='social__icon fa-brands fa-linkedin'></i>
                            </a>
                        </li>
                        <li className='social__option'>
                            <a
                                href='https://www.facebook.com/franklin.maciasavellan'
                                className='social__link'
                                target='_blank'
                            >
                                <i className='social__icon fa-brands fa-facebook'></i>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Boton Curriculum */}
                <div className='user-info__buttons'>
                    <a href='#' className='user-info__btn'>
                        Download CV
                    </a>
                </div>

                {/*  Pie de Pgina */}
                <footer className='user-info__footer'>
                    &copy; 2023 Franklin Macias.
                </footer>
            </section>
        </aside>
    );
};
