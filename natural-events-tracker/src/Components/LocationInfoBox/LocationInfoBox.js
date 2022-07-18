import React, { useEffect, useState } from 'react'
import styles from './LocationInfoBox.module.css';

export const LocationInfoBox = ({ info }) => {


    const [isActive, setIsActive] = useState(false)

    console.log(isActive)

    const handleHide = () => {
        setIsActive(false)
        console.log(isActive)
    }

    useEffect(() => {
        setIsActive(true)
    }, [])

    return (
        <div className={styles[`${isActive ? "location-info" : "location-info-hide"}`]} >
            <h1>Event Location Info</h1>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>Title: <strong>{ info.title }</strong></li>
            </ul>
            <button onClick={ handleHide }>Close</button>
        </div>
    )
}
