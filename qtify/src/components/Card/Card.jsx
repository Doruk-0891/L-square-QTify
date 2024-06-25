import React from "react";
import Chip from '@mui/material/Chip';
import styles from './Card.module.css';

const Card = ({data}) => {
    const {image, title, follows} = data;
    return (
        <div className={styles.container}>
            <div className={styles.imageSection}>
                <div className={styles.imageWrapper}>
                    <img src={image} alt={title} />
                </div>
                <Chip label={follows + ' Follows'} className={styles.pill} />
            </div>
            <p>{title}</p>
        </div>
    );
}

export default Card;