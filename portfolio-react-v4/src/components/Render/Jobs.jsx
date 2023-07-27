import React from 'react';

export const Jobs = ({ job }) => {
    return (
        <article className='timelines__timeline'>
            <header className='timeline__header'>
                <h4 className='timeline__year'>{job.date}</h4>
                <span className='timeline__company'>{job.company}</span>
            </header>

            <div className='timeline__divider'></div>

            <div className='timeline__description'>
                <h3 className='timeline__title'>{job.title}</h3>
                <p className='timeline__text'>{job.description}</p>
            </div>
        </article>
    );
};
