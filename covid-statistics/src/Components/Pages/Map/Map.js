import React, { useState } from 'react';
import ReactTooltip from "react-tooltip";
import { MapChart } from '../MapChart/MapChart';
import ReactCountryFlag from "react-country-flag"
import styles from './Map.module.css';

export const Map = ({ covidCases }) => {

    const [content, setContent] = useState("");
    const [country, setCountry] = useState("");

    return (
        <div className={styles.container}>
            <MapChart setTooltipContent={setContent} covidCases={covidCases} setCountryToShow={setCountry}/>
            <ReactTooltip>
                <h3>{content}</h3>
                <ReactCountryFlag countryCode={country.split(',')[3]} svg />
                <p>Confirm Cases: {country.split(',')[0] || 'No Available data'}</p>
                <p>Death: {country.split(',')[1] || 'No Available data'}</p>
                <p>Population: {country.split(',')[2] || 'No Available data'}</p>
            </ReactTooltip>
        </div>
    )
}