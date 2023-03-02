import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../../assets/img/meter95.svg';
import meter2 from '../../assets/img/meter2.svg';
import colorSharp from '../../assets/img/color-sharp.png';

import './Skills.css';

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
    };

    return (
        <section className='skill' id='skills'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='skill-bx wow zoomIn'>
                            <h2>Skills</h2>
                            <p>A Junior Frontend Web Developer with entry-level experience specializing in web development, user interface design, and React.js.<br></br> Adept at identifying opportunities to enhance frontend design and improve the user experience.</p>
                            <Carousel responsive={responsive} infinite={true} className='owl-carousel owl-theme skill-slider'>
                                <div className='item'>
                                    <img src={meter1} alt='Design + Development' />
                                    <h5>Design + Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt='UI/UX and Responsive Design' />
                                    <h5>UI/UX and Responsive Design</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt='Web Developer' />
                                    <h5>Junior Frontend Web Developer</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt='React Developer' />
                                    <h5>React Developer</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className='background-image-left' src={colorSharp} alt='background' />
        </section>
    )
}
