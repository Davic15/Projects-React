import React from 'react';

export const Universities = ({ university }) => {
    return (
        <article className='timelines__timeline'>
            <header className='timeline__header'>
                <h4 className='timeline__year'>{university.date}</h4>
                <span className='timeline__company'>
                    {university.institution}
                </span>
            </header>

            <div className='timeline__divider'></div>

            <div className='timeline__description'>
                <h3 className='timeline__title'>{university.area}</h3>
                <p className='timeline__text'>{university.degree}</p>
            </div>
        </article>
    );
};
