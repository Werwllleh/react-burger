import React from 'react';
import styles from './error.module.css';

const Error = () => {
    return (
        <div className={styles.body}>
            <div className={'text text_type_main-large'}>
                Произошла ошибка
            </div>
            <div className={'text text_type_main-small mt-5'}>
                Попробуйте перезагурзить страницу или повторить запрос позже
            </div>
        </div>
    );
};

export default Error;