import React from "react";
import styles from './Button.module.css';

const DarkButton = ({children}) => {
    return <button className={styles.darkButton}>{children}</button>;
}

export default DarkButton;