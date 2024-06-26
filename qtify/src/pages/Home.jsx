import React from "react";
import Hero from "../components/Hero/Hero";
import HeroImage from '../assets/hero_headphones.png';
import Section from "../components/Section/Section";
import { useOutletContext } from "react-router-dom";
import { fetchGenres } from "../api/api";


const Home = () => {
    const { data } = useOutletContext();
    const {topAlbums, newAlbums, songs} = data;
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
            <Section title='Top Albums' data={topAlbums} type='album' />
            <Section title='New Albums' data={newAlbums} type='album' />
            <Section title='Songs' data={songs} fetchFilter={fetchGenres} type='songs' />
        </>
    );
}

export default Home;