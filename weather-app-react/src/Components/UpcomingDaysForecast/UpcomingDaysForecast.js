import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { UpcomingDaysForecastItem } from '../UpcomingDaysForecastItem/UpcomingDaysForecastItem';

import styles from './UpcomingDaysForecast.module.css';

export const UpcomingDaysForecast = ({ days }) => {
    return (
        <ul className={`${styles.weekList} d-flex justify-content-between p-0`}>
            {
                days.map(day => (
                    <UpcomingDaysForecastItem {...day} key={nanoid()} />
                ))
            }
        </ul>
    )
}

UpcomingDaysForecast.propTypes = {
    days: PropTypes.array.isRequired,
};
