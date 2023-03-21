import React, {useEffect, useMemo, useState} from 'react';
import styles from './burger-constructor.module.css';
import MyConstructorElement from "./my-constructor-element/my-constructor-element";
import CurrentPrice from "../../current-price/current-price";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../modal/modal";
import OrderDetails from "../../modals-inner/order-details/order-details";
import {DATA_PROP_TYPES} from "../../../utils/consts";
import {useSelector} from "react-redux";


const BurgerConstructor = ({data}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    };

    const {bun, ingredients} = useSelector(state => state.constructorReducer);

    const ingredientsPrice = useMemo(() => {
        return ingredients.reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.info.price || 0);
        }, 0);
    }, [ingredients]);

    const bunsPrice = useMemo(() => {
        return bun?.info.price * 2 || 0;
    }, [bun]);

    useEffect(() => {
        setPrice(ingredientsPrice + bunsPrice);
    }, [ingredientsPrice, bunsPrice]);

    return (
        <>
            <MyConstructorElement data={data}/>
            <div className={styles.ordering}>
                <CurrentPrice size={'medium'} sum={price}/>
                <Button onClick={toggleModal} extraClass={styles.btn} htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
            {isOpen ? (
                <Modal onClose={() => setIsOpen(false)}>
                    <OrderDetails/>
                </Modal>
            ) : null}
        </>
    );
};

/*BurgerConstructor.propTypes = {
    data: DATA_PROP_TYPES
};*/

export default BurgerConstructor;