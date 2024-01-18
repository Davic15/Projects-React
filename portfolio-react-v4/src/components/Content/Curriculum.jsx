import React from 'react';
import { certifications } from '../../data/certifications';
import { jobs } from '../../data/jobs';
import { technologies } from '../../data/technologies';
import { universities } from '../../data/universities';
import { Universities } from '../Render/Universities';
import { Jobs } from '../Render/Jobs';
import { Certificates } from '../Render/Certificates';
import { Technologies } from '../Render/Technologies';

export const Curriculum = () => {
    return (
        <section className='content__page content__resume'>
            <header className='resume__header'>
                <h1 className='resume__title'>Curriculum</h1>
            </header>

            <div className='resume__container'>
                <section className='resume__left'>
                    <header className='resume__subheader'>
                        <h2 className='resume__subtitle'>Education</h2>
                    </header>

                    <div className='resume__timelines'>
                        {universities.map((university) => {
                            return (
                                <Universities
                                    university={university}
                                    key={university.id}
                                />
                            );
                        })}
                    </div>

                    <header className='resume__subheader'>
                        <h2 className='resume__subtitle'>Experience</h2>
                    </header>

                    <div className='resume__timelines'>
                        {jobs.map((job) => {
                            return <Jobs job={job} key={job.id} />;
                        })}
                    </div>
                </section>
                <section className='resume__right'>
                    <header className='resume__subheader'>
                        <h2 className='resume__subtitle'>
                            Designer
                            <span className='subtitle__color'> skills</span>
                        </h2>
                    </header>

                    <div className='resume__skills'>
                        <article className='skills__title'>
                            <h4 className='skills__text'>Web Design</h4>
                            <span className='skills__number'>90%</span>
                        </article>
                        <div className='skills__progressbar'>
                            <div className='skills__percentage skills__percentage--p1'></div>
                        </div>

                        <article className='skills__title'>
                            <h4 className='skills__text'>Mockup</h4>
                            <span className='skills__number'>70%</span>
                        </article>
                        <div className='skills__progressbar'>
                            <div className='skills__percentage skills__percentage--p2'></div>
                        </div>

                        <article className='skills__title'>
                            <h4 className='skills__text'>UI/UX</h4>
                            <span className='skills__number'>60%</span>
                        </article>
                        <div className='skills__progressbar'>
                            <div className='skills__percentage skills__percentage--p3'></div>
                        </div>

                        <article className='skills__title'>
                            <h4 className='skills__text'>Responsive Design</h4>
                            <span className='skills__number'>80%</span>
                        </article>
                        <div className='skills__progressbar'>
                            <div className='skills__percentage skills__percentage--p4'></div>
                        </div>
                    </div>

                    <header className='resume__subheader'>
                        <h2 className='resume__subtitle'>
                            Coding
                            <span className='subtitle__color'> skills</span>
                        </h2>
                    </header>

                    <div className='resume__skills'>
                        <article className='skills__title'>
                            <h4 className='skills__text'>HTML</h4>
                            <span className='skills__number'>97%</span>
                        </article>
                        <div className='skills__progressbar'>
                            <div className='skills__percentage skills__percentage--p5'></div>
                        </div>

                        <article className='skills__title'>
                            <h4 className='skills__text'>CSS</h4>
                            <span className='skills__number'>85%</span>
                        </article>
                        <div className='skills__progressbar'>
                            <div className='skills__percentage skills__percentage--p6'></div>
                        </div>

                        <article className='skills__title'>
                            <h4 className='skills__text'>Javascript</h4>
                            <span className='skills__number'>80%</span>
                        </article>
                        <div className='skills__progressbar'>
                            <div className='skills__percentage skills__percentage--p7'></div>
                        </div>

                        <article className='skills__title'>
                            <h4 className='skills__text'>TypeScript</h4>
                            <span className='skills__number'>50%</span>
                        </article>
                        <div className='skills__progressbar'>
                            <div className='skills__percentage skills__percentage--p9'></div>
                        </div>

                        <article className='skills__title'>
                            <h4 className='skills__text'>React</h4>
                            <span className='skills__number'>70%</span>
                        </article>
                        <div className='skills__progressbar'>
                            <div className='skills__percentage skills__percentage--p8'></div>
                        </div>

                        <article className='skills__title'>
                            <h4 className='skills__text'>Angular</h4>
                            <span className='skills__number'>50%</span>
                        </article>
                        <div className='skills__progressbar'>
                            <div className='skills__percentage skills__percentage--p9'></div>
                        </div>
                    </div>

                    <header className='resume__subheader'>
                        <h2 className='resume__subtitle'>Technologies</h2>
                    </header>

                    <div className='resume__knowledges'>
                        <ul className='knowledges__list'>
                            {technologies.map((tech, index) => {
                                return <Technologies tech={tech} key={index} />;
                            })}
                        </ul>
                    </div>
                </section>
            </div>
            <div className='resume__certificates'>
                <header className='resume__subheader'>
                    <h2 className='resume__subtitle'>Certifications</h2>
                </header>

                <section className='certificates__container'>
                    {certifications.map((certificate) => {
                        return (
                            <Certificates
                                certificate={certificate}
                                key={certificate.id}
                            />
                        );
                    })}
                </section>
            </div>
        </section>
    );
};
