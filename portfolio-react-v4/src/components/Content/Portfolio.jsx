import React from 'react';
import { projects } from '../../data/projects';
import { Projects } from '../Render/Projects';

export const Portfolio = () => {
    return (
        <section className='content__page content__portfolio'>
            <header className='portfolio__header'>
                <h1 className='portfolio__title'>Portfolio</h1>
            </header>
            {/*
            <nav className='portfolio__navbar'>
                <ul className='portfolio__menu'>
                    <li className='portfolio__option portfolio__option--active'>
                        <a href='#' className='portfolio__link'>
                            Todo
                        </a>
                    </li>
                    <li className='portfolio__option'>
                        <a href='#' className='portfolio__link'>
                            Cursos
                        </a>
                    </li>
                    <li className='portfolio__option'>
                        <a href='#' className='portfolio__link'>
                            Web
                        </a>
                    </li>
                    <li className='portfolio__option'>
                        <a href='#' className='portfolio__link'>
                            Redes Sociales
                        </a>
                    </li>
                    <li className='portfolio__option'>
                        <a href='#' className='portfolio__link'>
                            Videos
                        </a>
                    </li>
                    <li className='portfolio__option'>
                        <a href='#' className='portfolio__link'>
                            Proyectos
                        </a>
                    </li>
                </ul>
    </nav>*/}
            <section className='portfolio__gallery'>
                {projects.map((project) => {
                    return <Projects project={project} key={project.id} />;
                })}
            </section>
        </section>
    );
};
