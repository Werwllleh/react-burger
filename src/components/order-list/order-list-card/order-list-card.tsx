import React from 'react';
import styles from './order-list-card.module.css'
import OrderIngredientIcon from "../order-ingredient-icon/order-ingredient-icon";
import CurrentPrice from "../../current-price/current-price";

const OrderListCard = () => {
    return (
        <div className={styles.body}>
            <div className={styles.content}>
                <div className={styles.head}>
                    <div className={styles.order_number}>
                        <p className={'text text_type_digits-default'}>#034535</p>
                    </div>
                    <div className={styles.order_date}>
                        <p className={'text text_type_main-default text_color_inactive'}>Сегодня, 16:20</p>
                    </div>
                </div>
                <div className={styles.name}>
                    <p className={'text text_type_main-medium'}>Death Star Starship Main бургер</p>
                    <div className={styles.status}>
                        <p className={'text text_type_main-small'}>Готовится</p>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.ingredients_icons}>
                        <OrderIngredientIcon/>
                        <OrderIngredientIcon/>
                        <OrderIngredientIcon/>
                        <OrderIngredientIcon/>
                    </div>
                    <div className={styles.total}>
                        <CurrentPrice sum={480} size={'medium'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderListCard;