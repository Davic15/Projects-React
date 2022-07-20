import React, { useEffect, useState } from 'react';
import { Loader } from '../../Loader/Loader';
import { MatchesItems } from '../MatchesItems/MatchesItems';

import styles from './Matches.module.css';

export const Matches = () => {
    const BASE_URL = 'https://api.opendota.com/api/live';
    const ICON_URL = 'https://api.opendota.com/api/heroStats';

    const urlList = [
        BASE_URL,
        ICON_URL
    ]

    const[isLoading, setIsLoading] = useState(false);
    const[matchesFetched, setMatchesFetched] = useState([]);
    const[iconsFetched, setIconFetched] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                
                const [responseURL, responseICON] = await Promise.all (
                    urlList.map((url) => fetch(url).then((response) => response.json()))
                )
                setIconFetched(responseICON);
                setMatchesFetched(responseURL);
                setIsLoading(false);
            } catch (err) {
                throw new Error(err)
            }
        }
        fetchData();
    }, [])

    return (
        <div className={styles.matches}>
            <h1>Live Matches with high MMR or Pro Players</h1>
            {isLoading && <Loader />}
            <MatchesItems matchesFetched={matchesFetched} iconsFetched={iconsFetched}/>
        </div>
    )
}
