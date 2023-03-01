import React from 'react';
import { Banner } from '../components/content/Banner';
import { Project } from '../components/content/Project';
import { Skills } from '../components/content/Skills';
import { Header } from '../components/layout/Header';

export const MyRoutes = () => {
    return (
        <>
            <Header />
            <Banner />
            <Skills />
            <Project />
        </>
    )
}
