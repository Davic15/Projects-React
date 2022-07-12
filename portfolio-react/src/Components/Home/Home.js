import React from 'react'

export const Home = () => {
    return (
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Franklin Macias</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">front-end web developer</p>
            <img src="img/dev-david-01.jpg" alt="profile" className="intro__img" />
        </section>
    )
}
