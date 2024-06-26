import React, {useState} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Card from "../Card/Card";
import Button from '@mui/material/Button';
import styles from './Section.module.css';
import Carousel from "../Carousel/Carousel";

const Section = ({title, data, type}) => {
    const [showCarousel, setShowCarousel] = useState(true);


    const handleToggle = () => {
        setShowCarousel(!showCarousel);
    }

    const cardToRender = data;

    return (
        <section className={styles.mainContainer}>
            <div className={styles.header}>
                <h3>{title}</h3>
                <Button variant="text" className={styles.button} onClick={handleToggle} >
                    {
                        !showCarousel ? 'Collapse': 'Show All'
                    }
                </Button>
            </div>
            {
                showCarousel ? <Carousel data={cardToRender} renderComponent={(data) => <Card data={data} type={type} />} /> 
                :
                data.length <= 0 ? <CircularProgress /> :
                <section className={styles.container}>
                    {
                        cardToRender.map((album) => {
                            return (
                                <Card data={album} key={album.id} />
                            );
                        })
                    }
                </section>
            }
        </section>
    );
}

export default Section;