import React, {useState, useEffect} from "react";
import { useSwiper } from 'swiper/react';
import styles from './CarouselLeftNavigation.module.css';
import {ReactComponent as LeftArrow} from '../../../assets/LeftArrow.svg';


const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", function() {
            setIsBeginning(swiper.isBeginning);
        });
    }, [swiper]);

    return (
        <div className={styles.leftNavigation}>
            {!isBeginning && <LeftArrow onClick={() => {swiper.slidePrev()}} className={styles.swiperSlide} />}
        </div>
    );
}

export default CarouselLeftNavigation;