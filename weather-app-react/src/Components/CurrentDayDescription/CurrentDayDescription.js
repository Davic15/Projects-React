import React from 'react'
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';

import { CurrentDayDescriptionItem } from '../CurrentDayDescriptionItem/CurrentDayDescriptionItem';

export const CurrentDayDescription = ({ forecast }) => {
    return (
        <div className='mt-4 mt-md-2'>
            <div className='d-flex flex-column mb-2'>
                {forecast.map(item => (
                    <CurrentDayDescriptionItem {...item} key={nanoid()} />
                ))}
            </div>
        </div>
    )
};

CurrentDayDescription.propTypes = {
    forecast: PropTypes.array,
};
