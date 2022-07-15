import React from 'react'
import PropTypes from 'prop-types';

export const CurrentDayDescriptionItem = ({ name, value, unit }) => {
    console.log(name, value, unit)
    return (
        <div className='d-flex justify-content-between'>
            <p className='mb-0 font-weight-bolder text-uppercase'>{name}</p>
            <p className='mb-0'>
                {value} {unit}
            </p>
        </div>
    )
};

CurrentDayDescriptionItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
};
