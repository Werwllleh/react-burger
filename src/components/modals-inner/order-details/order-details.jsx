import React from 'react';
import { ReactComponent as IconSuccessSvg } from '../../../images/icon-success.svg'
import styles from './order-details.module.css';
import {useSelector} from "react-redux";

const OrderDetails = () => {

    const data = useSelector(state => state.orderReducer.orderData)

    console.log(data)

    return (
        <div className={styles.body}>
            <div className={`${styles.order_num} text text_type_digits-large`}>
                {data?.order?.number}
            </div>
            <div className={`${styles.order_text} text text_type_main-medium`}>
                идентификатор заказа
            </div>
            <div className={styles.order_success}>
                <IconSuccessSvg/>
            </div>
            <div className={`${styles.footer} text text_type_main-default`}>
                <div>{data?.name} начали готовить</div>
                <div className={'text_color_inactive'}>Дождитесь готовности на орбитальной станции</div>
            </div>
        </div>
    );
};

export default OrderDetails;