import React from 'react';
import styles from './header.module.scss';


const Header = () => {
    return (
        <nav className={styles.header}>
            <h1> <a href="/">Yfitops</a></h1>
            <div className={styles.header_button}><a href="/page/favoris">Favoris</a></div>

            <div className={styles.header_button}><a href="/page/details">Détails</a></div>
            <div className={styles.search_bar}>
                <input type="text" placeholder="Rechercher..." />
                <button className={styles.search_button}>Rechercher</button>
            </div>
        </nav>
    );
};

export default Header;