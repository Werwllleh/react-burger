import React from 'react';
import styles from './not-found.module.css'

const NotFound = (): JSX.Element => {
    return (
        <div className={styles.body}>
            <div className={styles.block}>
                <p className="text text_type_digits-large">404</p>
                <p className={`${styles.text} text text_type_main-large`}>
                    Not found
                </p>
            </div>
        </div>
    );
};

export default NotFound;