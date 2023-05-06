import React from 'react';
import styles from './status-board.module.css';

const StatusBoard = () => {
    return (
        <div className={styles.body}>
            <div className={styles.status_columns}>
                <div className={styles.column}>
                    <div className={styles.column_title}>
                        <p className={'text text_type_main-medium'}>Готовы:</p>
                    </div>
                    <div className={`${styles.column_numbers} ${styles.text_color}`}>
                        <p className={'text text_type_main-medium'}>034533</p>
                        <p className={'text text_type_main-medium'}>034533</p>
                        <p className={'text text_type_main-medium'}>034533</p>
                        <p className={'text text_type_main-medium'}>034533</p>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.column_title}>
                        <p className={'text text_type_main-medium'}>В работе:</p>
                    </div>
                    <div className={styles.column_numbers}>
                        <p className={'text text_type_main-medium'}>034533</p>
                        <p className={'text text_type_main-medium'}>034533</p>
                        <p className={'text text_type_main-medium'}>034533</p>
                        <p className={'text text_type_main-medium'}>034533</p>
                    </div>
                </div>
            </div>
            <div className={styles.text_block}>
                <div className={styles.title}>
                    <p className={'text text_type_main-medium'}>Выполнено за все время:</p>
                </div>
                <div className={styles.total}>
                    <p className="text text_type_digits-large">28752</p>
                </div>
            </div>
            <div className={styles.text_block}>
                <div className={styles.title}>
                    <p className={'text text_type_main-medium'}>Выполнено за сегодня:</p>
                </div>
                <div className={styles.total}>
                    <p className="text text_type_digits-large">138</p>
                </div>
            </div>
        </div>
    );
};

export default StatusBoard;