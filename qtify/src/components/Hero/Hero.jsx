import React from "react";
import styles from './Hero.module.css';

const Hero = ({hero_details}) => {
    return (
        <div className={styles.hero}>
            <div>
                {
                    hero_details['text'].map((text_content, idx) => {
                        return (<h2 key={idx}>{text_content}</h2>);
                    })
                }
            </div>
            <div>
                <img src={hero_details['image']} alt="headphones" width={212} />
            </div>
        </div>
    );
}

export default Hero;