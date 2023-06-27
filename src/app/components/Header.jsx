'use client'
import React from 'react';
import Search from "./Search";
import styles from './header.module.scss';


const Header = () => {
    return (
        <nav className={styles.header}>
            <h1> <a href="/">Yfitops</a></h1>
            <div className={styles.header_button}><a href="/page/favoris">Favoris</a></div>
            <div className={styles.search_bar}>
                <Search/>
            </div>
        </nav>
    );
};

export default Header;