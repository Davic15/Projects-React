import React from 'react';
import { projects } from '../../data/projects';
import { Projects } from '../Render/Projects';

export const Portfolio = () => {
    return (
        <section className='content__page content__portfolio'>
            <header className='portfolio__header'>
                <h1 className='portfolio__title'>Portfolio</h1>
            </header>
            <section className='portfolio__gallery'>
                {projects.map((project) => {
                    return <Projects project={project} key={project.id} />;
                })}
            </section>
        </section>
    );
};
