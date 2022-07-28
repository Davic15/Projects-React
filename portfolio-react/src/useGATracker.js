import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';

const useGaTracker = () => {
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!window.location.href.includes("localhost")) {
            ReactGA.initialize("G-J89BXXVYHW");
            setInitialized(true);
            console.log('Initialized GA.')
        }
    }, []);

    useEffect(() => {
        if (initialized) {
            ReactGA.pageview(window.location.pathname + window.location.search);
            console.log('Working GA.')
        }
    }, [initialized]);
};

export default useGaTracker;