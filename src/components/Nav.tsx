import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
    return (
        <nav>
            <ul className={styles.navList}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/src/app/about">About</Link></li>
                <li><Link href="/src/app/mission">Mission nuts</Link></li>
            </ul>
        </nav>
    );
};
export default Nav;
//hi guys