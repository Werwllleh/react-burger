import React from 'react';
import styles from './order-ingredient-icon.module.css';
import ingredientIcon from './../../../images/bun-plug.png';

const OrderIngredientIcon = () => {
    return (
        <div className={styles.body}>
            <img className={styles.icon} src={ingredientIcon} alt=""/>
        </div>
    );
};

export default OrderIngredientIcon;