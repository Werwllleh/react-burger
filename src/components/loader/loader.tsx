import React from 'react';
import styles from './loader.module.css';

const Loader = () => {
    return <div className={styles.body}><div className={styles.loader_ring}></div></div>;
};

export default Loader;