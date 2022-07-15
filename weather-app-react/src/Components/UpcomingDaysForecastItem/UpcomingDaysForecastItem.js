import React from 'react';
import PropTypes from 'prop-types';

import styles from './UpcomingDaysForecastItem.module.css';

export const UpcomingDaysForecastItem = ({ imgUrl, maxTemp, weekDay }) => {
    return (
        <li className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}>
            <img className="mb-2" width="30" src={imgUrl} alt="weather icon" />
            <span className="mb-2">{weekDay}</span>
            <span className="font-weight-bold">{maxTemp}&deg;</span>
        </li>
    )
}

UpcomingDaysForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    maxTemp: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
};
