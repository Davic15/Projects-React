import React from 'react';
import { Banner } from '../components/content/Banner';
import { Contact } from '../components/content/Contact';
import { Project } from '../components/content/Project';
import { Skills } from '../components/content/Skills';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';

export const MyRoutes = () => {
    return (
        <>
            <Header />
            <Banner />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </>
    )
}
