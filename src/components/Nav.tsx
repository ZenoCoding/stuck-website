import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
    return (
        <nav>
            <ul className={styles.navList}>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
                <li><Link href="/mission"><a>Mission nuts</a></Link></li>
            </ul>
        </nav>
    );
};
export default Nav;
//hi guys