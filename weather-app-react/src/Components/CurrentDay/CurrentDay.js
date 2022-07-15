import React from 'react';
import PropTypes from 'prop-types';
import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';

export const CurrentDay = ({ currentWeekday, todaysFullDate, locationName, todaysImgUrl, todaysTemp, weatherState }) => {
    return (
        <div className='d-flex'>
            <div className={styles.img}></div>
            <div className={styles.gradient}></div>
            <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
            <div>
                <h2 className="font-weight-bold mb-1">{currentWeekday}</h2>
                <p className="mb-0">{todaysFullDate}</p>
                <p className="d-flex align-items-baseline font-weight-lighter mb-1">
                    <img width="10" height="15" src={locationIcon} className="mr-1" alt="location pin icon" />
                    <span>{locationName}</span>
                </p>
            </div>
            <div>
                <img width="45" src={todaysImgUrl} alt="" />
                <h2 className="font-weight-bold mb-1">
                    <span>{todaysTemp}</span>°C
                </h2>
                <h5 className="font-weight-lighter">{weatherState}</h5>
            </div>
            </div>
        </div>
    )
};

CurrentDay.propTypes = {
    currentWeekday: PropTypes.string.isRequired,
    todaysFullDate: PropTypes.string.isRequired,
    locationName: PropTypes.string.isRequired,
    todaysImgUrl: PropTypes.string.isRequired,
    todaysTemp: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};
