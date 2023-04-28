import React from 'react';
import {ReactComponent as IconSuccessSvg} from '../../../images/icon-success.svg'
import styles from './order-details.module.css';
import {useSelector} from "react-redux";
import Loader from "../../loader/loader";

const OrderDetails = () => {

    //@ts-ignore
    const data = useSelector(state => state.orderReducer.orderData)

    return (
        data?.success === true ? (
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
        ) : <Loader/>
    );
};

export default OrderDetails;