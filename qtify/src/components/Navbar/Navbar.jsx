import React from "react";
import Logo from '../Logo/Logo';
import DarkButton from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to='/'>
                <Logo />
            </Link>
            <SearchBar placeholder="Search a song of your choice" />
            <DarkButton>Give feedback</DarkButton>
        </nav>
    );
}

export default Navbar;
