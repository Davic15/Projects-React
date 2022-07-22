import React, { useState, useEffect } from 'react'
import { Loader } from '../../Loader/Loader';
import { Map } from '../Map/Map'
import styles from './Home.module.css'
import axios from 'axios';

export const Home = () => {
    const URL_CASES = 'https://covid-api.mmediagroup.fr/v1/cases'
    const [covidCases, setCovidCases] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchCovidCases = async () => {
            try {
                setIsLoading(true)
                const { data } = await axios(URL_CASES);
                setCovidCases(data)
                setIsLoading(false);
                return data;
            } catch (err) {
                throw new Error (err);
            }
        }
        fetchCovidCases()
    }, [])

    return (
        <div className={styles.container}>
            {isLoading && <Loader />}
            <Map covidCases={covidCases}/>
        </div>
    )
}
