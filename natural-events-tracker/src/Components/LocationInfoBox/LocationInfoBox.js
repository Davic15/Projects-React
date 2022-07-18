import React from 'react'
import styles from './LocationInfoBox.module.css';

export const LocationInfoBox = ({ info }) => {

    return (
        <div className={styles["location-info"]} id='main'>
            <h1>Event Location Info</h1>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>Title: <strong>{ info.title }</strong></li>
            </ul>
        </div>
    )
}
