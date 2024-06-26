import React from "react";
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import styles from './Card.module.css';

const Card = ({data}) => {
    const {image, title, follows, likes, songs} = data;
    const pillText = follows ? `${follows} Follows` : `${likes} Likes`;
    return (
        <Tooltip title={follows ? `${songs?.length} songs` : ''} placement="top" arrow>
            <div className={styles.container}>
                <div className={styles.imageSection}>
                    <div className={styles.imageWrapper}>
                        <img src={image} alt={title} />
                    </div>
                    <Chip label={pillText} className={styles.pill} />
                </div>
                <p className={styles.title}>{title}</p>
            </div>
        </Tooltip>
    );
}

export default Card;