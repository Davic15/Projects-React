import React from 'react';
import {card} from '../assets';
import styles, {layout} from "../style.js";
import Button from './Button.jsx';

const CardDeal = () => {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Find a better card deal <br className="sm:block hidden"/> in few easy
                    steps.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    We have special discounts for our customers in different stores and services.
                </p>

                <Button styles={`mt-10`}/>
            </div>

            <div className={layout.sectionImg}>
                <img src={card} alt="billing" className="w-[100%] h-[100%]"/>
            </div>
        </section>
    )
}
export default CardDeal
