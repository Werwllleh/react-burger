import React from 'react';
import styles from './order-list.module.css';
import OrderListCard from "./order-list-card/order-list-card";

const OrderList = (): JSX.Element => {

    const ws = new WebSocket("wss://norma.nomoreparties.space/orders/all");

    console.log(ws.readyState)


    return (
        <div className={styles.body}>
            <OrderListCard/>
            <OrderListCard/>
            <OrderListCard/>
            <OrderListCard/>
        </div>
    );
};

export default OrderList;