import React, {useState, useEffect} from "react";
import axios from 'axios';
import Card from "../Card/Card";
import Button from '@mui/material/Button';
import styles from './Section.module.css';

const Section = () => {
    const [topAlbums, setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);

    useEffect(() => {
        fetchTopAlbums();
        fetchNewAlbums();
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

    const fetchNewAlbums = async() => {
        const url = 'https://qtify-backend-labs.crio.do/albums/new';
        try {
            const newAlbumsResponse = await axios.get(url);
            setNewAlbums(newAlbumsResponse.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <section className={styles.mainContainer}>
                <div className={styles.header}>
                    <h3>Top Albums</h3>
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
            <section className={styles.mainContainer}>
                <div className={styles.header}>
                    <h3>New Albums</h3>
                    <Button variant="text" className={styles.button}>Collapse</Button>
                </div>
                <section className={styles.container}>
                    {
                        newAlbums.map((album) => {
                            return (
                                <Card data={album} key={album.id} />
                            );
                        })
                    }
                </section>
            </section>
        </>
    );
}

export default Section;