import React from 'react'

export const Services = () => {
    return (
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>Design + Development</h3>
                    <p>
                        Design websites from scratch using the latest technologies in the market like HTML, CSS and JavaScript. 
                        Continuous iterations are used to produce results quickly and continuously improve products.               
                    </p>
                </div> 
                
                <div className="service">
                    <h3>UI/UX and Responsive Design</h3>
                    <p>
                        Due to the fact more and more users access the Internet from mobile devices, 
                        Websites are adapted to the size of the screen.
                        Every website is unique and has its own user experience based on the client requests.
                    </p>
                </div> 
                
                <div className="service">
                    <h3>An Agile Collaborator</h3>
                    <p>
                        New technologies, new framework and solutions are deployed to develop new projects in order to stay ahead of 
                        competition and bring the best features to your platform . 
                    </p>
                </div>
            </div> 
            <a href="#work" className="btn">My Work</a>
        </section>
    )
}
