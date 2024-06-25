import React from "react";
import Hero from "../components/Hero/Hero";
import HeroImage from '../assets/hero_headphones.png';
import Section from "../components/Section/Section";


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
            <Section title='Top Albums' />
        </>
    );
}

export default Home;