import React from 'react';
import { projects } from '../../Data/projects';

export const Projects = () => {
  return (
    <>
      {
        projects.map(project => (
          <a key={project.id} href={project.url+project.id} className="portfolio__item">
            <img src={project.img} alt={project.alt} className="portfolio__img" />
          </a>
        )) 
      }
    </>
  )
}
