import React from 'react';
import styles from './burger-constructor.module.css';
import MyConstructorElement from "./my-constructor-element/my-constructor-element";
import CurrentPrice from "../../current-price/current-price";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = () => {
    return (
        <>
            <MyConstructorElement/>
            <div className={styles.ordering}>
                <CurrentPrice size={'medium'} sum={'610'}/>
                <Button extraClass={styles.btn} htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </>
    );
};

export default BurgerConstructor;