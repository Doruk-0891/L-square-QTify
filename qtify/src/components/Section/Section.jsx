import React, {useState, useEffect} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Card from "../Card/Card";
import Button from '@mui/material/Button';
import styles from './Section.module.css';
import Carousel from "../Carousel/Carousel";
import Filters from "../Filter/Filter";

const Section = ({title, data, fetchFilter, type}) => {
    const [showCarousel, setShowCarousel] = useState(true);
    const [filters, setFilters] = useState([{key: 'all', label: 'All'}]);
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

    useEffect(() => {
        if (fetchFilter) {
            fetchFilter().then((genres) => {
                const {data} = genres;
                setFilters([...filters, ...data]);
            });
        }
    }, []);

    const handleToggle = () => {
        setShowCarousel(!showCarousel);
    }

    const showFilters = filters.length > 1;

    const cardToRender = data.filter((card) => 
        showFilters && selectedFilterIndex !== 0 ? 
        card.genre.key === filters[selectedFilterIndex].key 
        : card);

    return (
        <section className={styles.mainContainer}>
            <div className={styles.header}>
                <h3>{title}</h3>
                {
                    showFilters ? '' :
                    <Button variant="text" className={styles.button} onClick={handleToggle} >
                        {
                            !showCarousel ? 'Collapse': 'Show All'
                        }
                    </Button>
                }
            </div>
            {
                showFilters ? <Filters filters={filters} setSelectedFilterIndex={setSelectedFilterIndex} selectedFilterIndex={selectedFilterIndex} /> : ''
            }
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