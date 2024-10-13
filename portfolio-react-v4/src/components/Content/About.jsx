import React from 'react';

export const About = () => {
    return (
        <section className='content__page content__about'>
            <header className='about__header'>
                <h1 className='about__title'>
                    About <span className='title__color'>Me</span>
                </h1>
            </header>
            <section className='about__personal-info'>
                <article className='personal-info__bio'>
                    <p className='personal-info__description'>
                        I am a very talented person with good analytical skills working as a Frontend Web Developer with
                        several years of experience in the market.
                        I bring with me relevant knowledge about different web technologies such as JavaScript,
                        TypeScript, React and Angular, in addition to relevant software and programming tools.
                        I like challenges that is why I am motivated to learn new technologies and tools in the field of
                        web development. For now I am practicing AI for Web Developers, Web3 and Crypto.
                    </p>
                </article>
                <div className='personal-info__data'>
                    <ul className='personal-info__list'>
                        <li className='personal-info__option'>
                            <span className='personal-info__title'>Age</span>
                            <span className='personal-info__value'>36</span>
                        </li>
                        <li className='personal-info__option'>
                            <span className='personal-info__title'>
                                Country
                            </span>
                            <span className='personal-info__value'>Egypt</span>
                        </li>
                        <li className='personal-info__option'>
                            <span className='personal-info__title'>
                                Address
                            </span>
                            <span className='personal-info__value'>
                                Heliopolis
                            </span>
                        </li>
                        <li className='personal-info__option'>
                            <span className='personal-info__title'>Email</span>
                            <span className='personal-info__value'>
                                franklindavid [dot] maciasavellan [at] gmail
                                [dot] com
                            </span>
                        </li>
                        <li className='personal-info__option'>
                            <span className='personal-info__title'>
                                Cellphone
                            </span>
                            <span className='personal-info__value'>
                                +39 379 274 2621
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='about__services'>
                <header className='services__header'>
                    <h2 className='services__title'>
                        My <span className='title__color'>services</span>
                    </h2>
                </header>
                <div className='services__container'>
                    <article className='services__service'>
                        <div className='service__icon'>
                            <i className='service__real-icon fa-solid fa-code'></i>
                        </div>
                        <div className='service__content'>
                            <h3 className='service__title'>
                                Design + Development
                            </h3>
                            <p className='service__description'>
                                Design websites from scratch using the latest
                                technologies in the market like HTML, CSS and
                                JavaScript. Continuous iterations are used to
                                produce results quickly and continuously improve
                                products.
                            </p>
                        </div>
                    </article>

                    <article className='services__service'>
                        <div className='service__icon'>
                            <i className='service__real-icon fa-solid fa-chalkboard-teacher'></i>
                        </div>
                        <div className='service__content'>
                            <h3 className='service__title'>
                                UI/UX and Responsive Design
                            </h3>
                            <p className='service__description'>
                                Due to the fact more and more users access the
                                Internet from mobile devices, Websites are
                                adapted to the size of the screen. Every website
                                is unique and has its own user experience based
                                on the client requests.
                            </p>
                        </div>
                    </article>

                    <article className='services__service'>
                        <div className='service__icon'>
                            <i className='service__real-icon fa-solid fa-computer'></i>
                        </div>
                        <div className='service__content'>
                            <h3 className='service__title'>
                                An Agile Collaborator
                            </h3>
                            <p className='service__description'>
                                New technologies, new framework and solutions
                                are deployed to develop new projects in order to
                                stay ahead of competition and bring the best
                                features to your platform .
                            </p>
                        </div>
                    </article>

                    <article className='services__service'>
                        <div className='service__icon'>
                            <i className='service__real-icon fa-solid fa-terminal'></i>
                        </div>
                        <div className='service__content'>
                            <h3 className='service__title'>Freelance</h3>
                            <p className='service__description'>
                                I also collaborate with freelance projects of
                                any kind related to Frontend technologies such
                                as JavaScript, TypeScript, React and Angular.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        </section>
    );
};
