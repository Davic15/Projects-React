import React from 'react';
import { Header } from '../components/layout/Header';
import { Hero } from '../components/content/Hero';
import { Projects } from '../components/content/Projects';
import { About } from '../components/content/About';

export const MyRoutes = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Projects />
        </>
    );
};
