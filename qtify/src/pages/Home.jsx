import React from "react";
import Hero from "../components/Hero/Hero";
import HeroImage from '../assets/hero_headphones.png';

const Home = () => {
    const hero_props = {
        text: [
            '100 Thousand Songs, ad-free',
            'Over thousands podcast episodes'
        ],
        image: HeroImage
    };
    return (
        <>
            <Hero hero_details={hero_props} />
        </>
    );
}

export default Home;