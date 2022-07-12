import React from 'react'

export const Work = () => {
    return (
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div className="portfolio">

                <a href="/work-items/portfolio-item-one.html" className="portfolio__item">
                    <img src="/img/portfolio-01.png" alt="yes no api project" className="portfolio__img" />
                </a>
                

                <a href="/work-items/portfolio-item-two.html" className="portfolio__item">
                    <img src="/img/portfolio-02.png" alt="" className="portfolio__img" />
                </a>
                

                <a href="/work-items/portfolio-item-three.html" className="portfolio__item">
                    <img src="/img/portfolio-03.png" alt="" className="portfolio__img" />
                </a>
                

                <a href="/work-items/portfolio-item-four.html" className="portfolio__item">
                    <img src="/img/portfolio-04.png" alt="" className="portfolio__img" />
                </a>
                

                <a href="/work-items/portfolio-item-five.html" className="portfolio__item">
                    <img src="/img/portfolio-05.png" alt="" className="portfolio__img" />
                </a>
                

                <a href="/work-items/portfolio-item-six.html" className="portfolio__item">
                    <img src="/img/portfolio-06.png" alt="" className="portfolio__img" />
                </a>
            </div>
        </section>
    )
}
