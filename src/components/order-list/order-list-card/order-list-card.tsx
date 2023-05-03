import React from 'react';
import styles from './order-list-card.module.css'
import OrderIngredientIcon from "../order-ingredient-icon/order-ingredient-icon";

const OrderListCard = () => {
    return (
        <div className={styles.body}>
            <div className={styles.content}>
                <div className={styles.head}>
                    <div className={styles.order_number}>
                        #034535
                    </div>
                    <div className={styles.order_date}>
                        Сегодня, 16:20
                    </div>
                </div>
                <div className={styles.name}>
                    Death Star Starship Main бургер
                </div>
                <div className={styles.bottom}>
                    <div className={styles.ingredients_icons}>
                        <OrderIngredientIcon/>
                        <OrderIngredientIcon/>
                        <OrderIngredientIcon/>
                        <OrderIngredientIcon/>
                    </div>
                    <div className={styles.total}></div>
                </div>
            </div>
        </div>
    );
};

export default OrderListCard;