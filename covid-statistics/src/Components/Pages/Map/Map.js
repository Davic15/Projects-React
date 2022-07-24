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
            <MapChart setTooltipContent={setContent} covidCases={covidCases} setCountryToShow={setCountry} className={styles['map-chart']}/>
            <ReactTooltip className={styles.tooltip}>
                {content && (<>
                    <h3>{content}</h3>
                    <div>
                        <ReactCountryFlag countryCode={country.split(',')[3]} svg className={styles.flag}/>
                    </div>
                    <p>Confirm Cases: { country ? parseInt(country.split(',')[0]).toLocaleString('en-US') : 'No available data' }</p>
                    <p>Death: { country ? parseInt(country.split(',')[1]).toLocaleString('en-US') : 'No available data' }</p>
                    <p>Population: { country ? parseInt(country.split(',')[2]).toLocaleString('en-US') : 'No available data' }</p>
                </>)}
            </ReactTooltip>
        </div>
    )
}
