import React from 'react';
import styles from './order-list.module.css';
import OrderListCard from "./order-list-card/order-list-card";

const OrderList = () => {
    return (
        <div className={styles.body}>
            <OrderListCard/>
        </div>
    );
};

export default OrderList;