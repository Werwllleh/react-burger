import React, {useState} from 'react';
import styles from './burger-constructor.module.css';
import MyConstructorElement from "./my-constructor-element/my-constructor-element";
import CurrentPrice from "../../current-price/current-price";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../modal/modal";
import OrderDetails from "../../modals-inner/order-details/order-details";
import {DATA_PROP_TYPES} from "../../../utils/consts";

const BurgerConstructor = ({data}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <MyConstructorElement data={data}/>
            <div className={styles.ordering}>
                <CurrentPrice size={'medium'} sum={610}/>
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

BurgerConstructor.propTypes = {
    data: DATA_PROP_TYPES
};

export default BurgerConstructor;