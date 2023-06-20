
import React from 'react';
import styles from './header.module.scss';

const Header = () => {
    return (
        <nav className={styles.header}>
            <h1>Yfitops</h1>
            <div className={styles.header_button}><a href="">Sign Up</a></div>
            <div className={styles.header_button}><a href="">Login In</a></div>
        </nav>
    );
};

export default Header;