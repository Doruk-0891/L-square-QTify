import React, {useState, useEffect} from "react";
import axios from 'axios';
import Card from "../Card/Card";
import Button from '@mui/material/Button';
import styles from './Section.module.css';

const Section = ({title}) => {
    const [topAlbums, setTopAlbums] = useState([]);

    useEffect(() => {
        fetchTopAlbums();
    }, []);
    
    const fetchTopAlbums = async() => {
        const url = 'https://qtify-backend-labs.crio.do/albums/top';
        try {
            const topAlbumsResponse = await axios.get(url);
            setTopAlbums(topAlbumsResponse.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className={styles.mainContainer}>
            <div className={styles.header}>
                <h3>{title}</h3>
                <Button variant="text" className={styles.button}>Collapse</Button>
            </div>
            <section className={styles.container}>
                {
                    topAlbums.map((album) => {
                        return (
                            <Card data={album} key={album.id} />
                        );
                    })
                }
            </section>
        </section>
    );
}

export default Section;