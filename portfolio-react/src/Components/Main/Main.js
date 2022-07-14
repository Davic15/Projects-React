import React from 'react'
import { Home } from '../Home/Home'
import { Services } from '../Services/Services'
import { About } from '../About/About';
import { Work } from '../Work/Work';
import useGATracker from '../../useGATracker';

export const Main = () => {
    useGATracker();
    return (
        <>
            <Home />
            <Services />
            <About />
            <Work />
        </>
    )
}
