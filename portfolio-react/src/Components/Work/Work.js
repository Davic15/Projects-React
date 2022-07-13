import React from 'react'
import { Projects } from '../Projects/Projects'

export const Work = () => {
    return (
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div className="portfolio">
                <Projects />
            </div>
        </section>
    )
}
