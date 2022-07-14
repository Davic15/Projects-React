import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles-items.css';
import { projects } from '../../Data/projects';
import useGATracker from '../../useGATracker';

export const ProjectItems = () => {

    useGATracker();

    const [project, setProject] = useState({});
    const params = useParams();

    useEffect(() => {
        let project = projects.filter(project => project.id === params.id);
        setProject(project[0])
    }, [params.id])

    return (
        <>
            <section className="intro">
                <h1 className="section__title section__title--intro">
                    {project.title01} <strong>{project.title02}</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">{project.title03}</p>
                <img src={project.img_project} alt={project.alt} className="intro__img" />
            </section>
        
            <div className="portfolio-item-individual">
                <p>{project.description01}</p>
                <img src={project.img_project} alt={project.alt} />
                <p>{project.description02} {project.technologies}</p>
                <p>
                    <a className="btn btn-items" href={project.github} target="_blank" rel="noreferrer">Code <i className="fab fa-github"></i></a>
                    <a className="btn btn-items" href={project.website} target="_blank" rel="noreferrer">Webiste <i className="fas fa-link"></i></a>
                </p>
            </div>
        </>
    )
}
