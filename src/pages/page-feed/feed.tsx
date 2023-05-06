import React from 'react';
import styles from './feed.module.css';
import OrderList from "../../components/order-list/order-list";
import StatusBoard from "../../components/status-board/status-board";

const Feed = () => {
    return (
        <div className={'container'}>
            <section>
                <h1 className='text text_type_main-large mb-5'>Лента заказов</h1>
                <div className={styles.content}>
                    <div className={styles.column}>
                        <OrderList/>
                    </div>
                    <div className={styles.column}>
                        <StatusBoard/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Feed;