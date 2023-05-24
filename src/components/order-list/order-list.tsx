import React from 'react';
import styles from './order-list.module.css';
import OrderListCard from "./order-list-card/order-list-card";
import {IWSOrdersResponse} from "../../utils/types/types";

const OrderList = ({feedsData}: { feedsData: IWSOrdersResponse | null }): JSX.Element => {

    let sortedData;

    if (feedsData?.orders !== undefined) {
        sortedData = [...feedsData?.orders].sort((a, b) => {
            const dateA = Date.parse(a.createdAt);
            const dateB = Date.parse(b.createdAt);
            return dateB - dateA;
        });
    }

    return (
        <div className={styles.body}>
            {sortedData?.map((feedCard) => (
                <OrderListCard key={feedCard.number} cardData={feedCard}/>
            ))}
        </div>
    );
};

export default OrderList;