import React, {useState} from 'react';
import styles from './burger-constructor.module.css';
import MyConstructorElement from "./my-constructor-element/my-constructor-element";
import CurrentPrice from "../../current-price/current-price";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import Modal from "../../modal/modal";
import OrderDetails from "../../modals-inner/order-details/order-details";

const BurgerConstructor = ({data}) => {

    const dataPropTypes = PropTypes.arrayOf(PropTypes.shape(
        {
            _id: PropTypes.string.isRequired,
            __v: PropTypes.number,
            type: PropTypes.string,
            proteins: PropTypes.number,
            price: PropTypes.number,
            name: PropTypes.string,
            image_mobile: PropTypes.string,
            image_large: PropTypes.string,
            image: PropTypes.string,
            fat: PropTypes.number,
            carbohydrates: PropTypes.number,
            calories: PropTypes.number,
        }
    ));

    BurgerConstructor.propTypes = {
        data: dataPropTypes.isRequired
    };

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

export default BurgerConstructor;