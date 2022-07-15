import React from 'react';
import PropTypes from 'prop-types';

import styles from './Error.module.css';

export const Error = ({ message }) => {
    return (
        <div className={`${styles.error} alert position-absolute`} role='alert'>
            {message}
        </div>
    )
};

Error.prototype = {
    message: PropTypes.string
};

Error.defaultProps = {
    message: 'An error occurred'
};

