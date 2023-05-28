import React from 'react';
import { Header } from '../components/layout/Header';
import { Hero } from '../components/content/Hero';
import { Projects } from '../components/content/Projects';
import { About } from '../components/content/About';
import { Experience } from '../components/content/Experience';
import { Footer } from '../components/layout/Footer';
import { Contact } from '../components/content/Contact';

export const MyRoutes = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </>
    );
};
