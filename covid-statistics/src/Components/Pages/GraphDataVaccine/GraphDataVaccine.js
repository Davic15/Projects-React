import React, { useState } from 'react';
import { Loader } from '../../Loader/Loader';
import { GraphDataVaccineCountry } from '../GraphDataVaccineCountry/GraphDataVaccineCountry';
import styles from './GraphDataVaccine.module.css';

export const GraphDataVaccine = () => {
    const [vaccine, setVaccine] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const arrayVaccine = [];

    const handleClick = async (e) => {
        e.preventDefault();
        const countryToSearch = e.target[0].value;
        const reqVaccine = `https://disease.sh/v3/covid-19/vaccine/coverage/countries/${countryToSearch}?lastdays=all&fullData=false`;

        const urlList = [
            reqVaccine
        ]
        try {
            setIsLoading(true)

            const [res1] = await Promise.all(
                urlList.map((url) => fetch(url).then((response) => response.json()))
            )
                console.log(res1)
            for (const [date, vaccine] of Object.entries(res1.timeline)) {
                arrayVaccine.push({date, vaccine})
            }
            
            setVaccine(arrayVaccine)
            setIsLoading(false);
        } catch (err) {
            throw new Error (err);
        }
    }
    console.log(vaccine)
    return (
        <div className={styles.container}>
            <form onSubmit={(e) => handleClick(e)} className={styles.form}>
                <h3>Type a country to search (The first letter should be in uppercase)</h3>
                <div className={styles.inner}>
                    <input type='text' placeholder='Country' name='country' className={styles.text}/>
                </div>
                <div className={styles.inner}>
                    <input type='submit' value='Search' className={styles.button} />
                </div>
            </form>
            <div className={styles.graph}>
                {isLoading && <Loader />}
                {vaccine && <GraphDataVaccineCountry vaccine={vaccine}/>}
            </div>
        </div>
    )
}
