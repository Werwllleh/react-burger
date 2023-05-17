import React from 'react';
import styles from './order-list.module.css';
import OrderListCard from "./order-list-card/order-list-card";
import {IWSOrdersResponse} from "../../utils/types/types";

const OrderList = ({feedsData}: { feedsData: IWSOrdersResponse | null }): JSX.Element => {

    return (
        <div className={styles.body}>
            {feedsData?.orders.map((feedCard) => (
                <OrderListCard key={feedCard.number} cardData={feedCard}/>
            ))}
        </div>
    );
};

export default OrderList;