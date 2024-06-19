import React from "react";
import SearchIcon from '../../assets/SearchIcon.svg';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
    const {placeholder} = props;
    return (
        <div className={styles.searchContainer}> 
            <input type="text" placeholder={placeholder} />
            <button className={styles.searchButton}>
                <img src={SearchIcon} alt="Search icon" width={20} />
            </button>
        </div>
    );
}

export default SearchBar;