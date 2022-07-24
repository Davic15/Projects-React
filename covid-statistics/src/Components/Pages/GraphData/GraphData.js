import React, { useState } from 'react';
import { GraphDataCountry } from '../GraphDataCountry/GraphDataCountry';
import { Loader } from '../../Loader/Loader';

import styles from './GraphData.module.css';

export const GraphData = () => {
    const [covidCases, setCovidCases] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [covidCasesDeath, setCovidCasesDeath] = useState([]);
    const [covidCasesRecovered, setCovidCasesRecovered] = useState([])
    const arrayDates = [];
    const arrayDatesDeath = [];
    const arrayDatesRecovered = [];

    const handleClick = async (e) => {
        e.preventDefault();
        const countryToSearch = e.target[0].value;
        const reqPositive = `https://covid-api.mmediagroup.fr/v1/history?country=${countryToSearch}&status=Confirmed`;
        const reqDeaths =  `https://covid-api.mmediagroup.fr/v1/history?country=${countryToSearch}&status=Deaths`;
        const reqRecover =  `https://covid-api.mmediagroup.fr/v1/history?country=${countryToSearch}&status=Recovered`;

        const urlList = [
            reqPositive,
            reqDeaths,
            reqRecover
        ]
        try {
            setIsLoading(true)

            const [res1, res2, res3] = await Promise.all(
                urlList.map((url) => fetch(url).then((response) => response.json()))
            )

            for (const [date, positive] of Object.entries(res1.All.dates)) {
                arrayDates.push({date, positive})
            }
            arrayDates.reverse();

            for (const [date, deaths] of Object.entries(res2.All.dates)) {
                arrayDatesDeath.push({date, deaths})
            }
            arrayDatesDeath.reverse();

            for (const [date, recovered] of Object.entries(res3.All.dates)) {
                arrayDatesRecovered.push({date, recovered})
            }
            arrayDatesRecovered.reverse();

            setCovidCases(arrayDates)
            setCovidCasesDeath(arrayDatesDeath)
            setCovidCasesRecovered(arrayDatesRecovered)
            
            setIsLoading(false);
        } catch (err) {
            throw new Error (err);
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={(e) => handleClick(e)}>
                <input type='text' placeholder='Country' name='country'/>
                <input type='submit' value='Search' />
            </form>
            <div className='graph'>
                {isLoading && <Loader />}
                {covidCases && <GraphDataCountry covidCases={covidCases} covidCasesDeath={covidCasesDeath} covidCasesRecovered={covidCasesRecovered}/>}
            </div>
        </div>
    )
}
