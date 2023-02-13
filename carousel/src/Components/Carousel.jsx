import React, { useState } from 'react'
import { images } from '../Helper/images'

export const Carousel = () => {

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === images.length -1 ? 0 : current + 1);
    }

    const nextSlide = () => {
        setCurrent(current === 0 ? images.length -1 : current -1);
    }
    console.log(images)

    return (
        <div className='slider'>
            <div className="left-arrow" onClick={prevSlide}>⬅</div>
            <div className="right-arrow" onClick={nextSlide}>⮕</div>
            {images.map((image, index) => 
                current === index && (
                    <div key={image} className='slide'>
                        <img src={image} alt='images' />
                    </div>
                )
            )}
        </div>
    )
}
