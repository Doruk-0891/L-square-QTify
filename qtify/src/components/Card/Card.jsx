import React from "react";
import Chip from '@mui/material/Chip';
import styles from './Card.module.css';

const Card = ({data}) => {
    const {image, title, follows, likes} = data;
    const pillText = follows ? `${follows} Follows` : `${likes} Likes`;
    return (
        <div className={styles.container}>
            <div className={styles.imageSection}>
                <div className={styles.imageWrapper}>
                    <img src={image} alt={title} />
                </div>
                <Chip label={pillText} className={styles.pill} />
            </div>
            <p className={styles.title}>{title}</p>
        </div>
    );
}

export default Card;