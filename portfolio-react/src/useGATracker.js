import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';

const useGaTracker = () => {
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!window.location.href.includes("localhost")) {
            ReactGA.initialize("G-QKDBLR3HZF");
            console.log("enter1")
            setInitialized(true);
        }
    }, []);

    useEffect(() => {
        if (initialized) {
            ReactGA.pageview(window.location.pathname + window.location.search);
            console.log('enter2')
        }
    }, [initialized]);
};

export default useGaTracker;