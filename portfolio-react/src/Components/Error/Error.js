import React from 'react';
import useGATracker from '../../useGATracker';

export const Error = () => {
    useGATracker();
    return (
        <section className="my-work">
            <h1>Error 404, page not found.</h1>
        </section>  
    )
}
