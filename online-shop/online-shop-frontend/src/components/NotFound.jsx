import React from 'react';
import classes from './NotFound.module.css';

export const NotFound = () => {
    return (
        <div className={classes['not-found']}>
            <h2>404</h2>
            <p>Page not found!</p>
        </div>
    )
}
