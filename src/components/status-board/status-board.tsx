import React, {useMemo} from 'react';
import styles from './status-board.module.css';
import {IWSOrdersResponse} from "../../utils/types/types";


const StatusBoard = ({feedsData}: { feedsData: IWSOrdersResponse | null }): JSX.Element => {

    const doneOrders: number[] = [];
    const atWorkOrders: number[] = [];

    useMemo(() => {
        return feedsData?.orders.filter((order) => {
            if (order.status === 'done') {
                doneOrders.push(order.number)
            } else {
                atWorkOrders.push(order.number)
            }
        })
    }, [feedsData, atWorkOrders, doneOrders])

    return (
        <div className={styles.body}>
            <div className={styles.status_columns}>
                <div className={styles.column}>
                    <div className={styles.column_title}>
                        <p className={'text text_type_main-medium'}>Готовы:</p>
                    </div>
                    <div className={`${styles.column_numbers} ${styles.text_color}`}>
                        {doneOrders.slice(0, 20).map(number => (
                            <p key={number} className={'text text_type_main-medium'}>{number}</p>
                        ))}
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.column_title}>
                        <p className={'text text_type_main-medium'}>В работе:</p>
                    </div>
                    <div className={styles.column_numbers}>
                        {atWorkOrders.slice(0, 20).map(number => (
                            <p key={number} className={'text text_type_main-medium'}>{number}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.text_block}>
                <div className={styles.title}>
                    <p className={'text text_type_main-medium'}>Выполнено за все время:</p>
                </div>
                <div className={styles.total}>
                    <p className="text text_type_digits-large">{feedsData?.total}</p>
                </div>
            </div>
            <div className={styles.text_block}>
                <div className={styles.title}>
                    <p className={'text text_type_main-medium'}>Выполнено за сегодня:</p>
                </div>
                <div className={styles.total}>
                    <p className="text text_type_digits-large">{feedsData?.totalToday}</p>
                </div>
            </div>
        </div>
    );
};

export default StatusBoard;