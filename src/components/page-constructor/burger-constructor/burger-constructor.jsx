import React, {useEffect, useMemo, useState} from 'react';
import styles from './burger-constructor.module.css';
import MyConstructorElement from "./my-constructor-element/my-constructor-element";
import CurrentPrice from "../../current-price/current-price";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../modal/modal";
import OrderDetails from "../../modals-inner/order-details/order-details";
import {DATA_PROP_TYPES} from "../../../utils/consts";
import {useDispatch, useSelector} from "react-redux";
import {fetchOrderNum} from "../../../services/reducers/actionCreators";


const BurgerConstructor = ({data}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0)

    const dispatch = useDispatch()

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


    const orderArr = ingredients.length > 0 && bun ? ingredients.concat(bun) : false

    const toggleModal = () => {
        let sendArr = []

        orderArr.map((item) => {
            sendArr.push(item.info._id)
        })

        dispatch(fetchOrderNum(sendArr))
        setIsOpen(!isOpen)
    };

    return (
        <>
            <MyConstructorElement data={data}/>
            <div className={styles.ordering}>
                <CurrentPrice size={'medium'} sum={price}/>
                <Button onClick={orderArr ? toggleModal : undefined} extraClass={styles.btn} htmlType="button" type="primary" size="large">
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