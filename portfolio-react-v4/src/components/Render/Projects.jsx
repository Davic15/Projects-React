import React from 'react';

export const Projects = ({ project }) => {
    return (
        <figure className='gallery__item'>
            <div className='gallery__container-image'>
                <a
                    href={project.website}
                    className='gallery__link'
                    target='_blank'
                >
                    <img
                        src={project.imgUrl}
                        alt={project.title}
                        className='gallery__image'
                    />
                </a>
            </div>
            <figcaption className='gallery__title'>{project.title}</figcaption>
            <i className='gallery__icon fa-solid fa-code'></i>
            <span className='gallery__category'>{project.category}</span>
        </figure>
    );
};
