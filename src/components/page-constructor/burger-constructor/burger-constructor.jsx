import React, {useMemo, useState} from 'react';
import styles from './burger-constructor.module.css';
import MyConstructorElement from "./my-constructor-element/my-constructor-element";
import CurrentPrice from "../../current-price/current-price";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../modal/modal";
import OrderDetails from "../../modals-inner/order-details/order-details";
import {BUN} from "../../../utils/consts";
import {useDispatch, useSelector} from "react-redux";
import {fetchOrderNum} from "../../../services/stores/action-creators";
import {removeOrderData} from "../../../services/stores/order";
import {useNavigate} from "react-router-dom";


const BurgerConstructor = () => {

    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const {bun, ingredients} = useSelector(state => state.constructorReducer);
    const user = useSelector(state => state.userReducer.userData.email)

    const ingredientsPrice = useMemo(() => {
        return ingredients.reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.info.price || 0);
        }, 0);
    }, [ingredients]);

    const bunsPrice = useMemo(() => {
        return bun?.info.price * 2 || 0;
    }, [bun]);

    const price = useMemo(() => {
        return ingredientsPrice + bunsPrice
    }, [bunsPrice, ingredientsPrice])

    const orderArr = ingredients.length > 0 && bun ? ingredients.concat(bun) : false;

    const toggleModal = () => {

        if (user !== null && user !== '' && user !== undefined) {
            let sendArr = orderArr.reduce((acc, item) => {
                if (item.info.type === BUN) {
                    acc.push(item.info._id, item.info._id);
                } else {
                    acc.push(item.info._id);
                }
                return acc;
            }, []);

            dispatch(fetchOrderNum(sendArr));
            setIsOpen(!isOpen)
        } else {
            navigate('/login');
        }
    };

    const closeModal = () => {
        setIsOpen(false)
        dispatch(removeOrderData())
    }

    return (
        <>
            <MyConstructorElement/>
            <div className={styles.ordering}>
                <CurrentPrice size={'medium'} sum={price}/>
                <Button onClick={orderArr ? toggleModal : undefined} extraClass={styles.btn} htmlType="button"
                        type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
            {isOpen ? (
                <Modal onClose={closeModal}>
                    <OrderDetails/>
                </Modal>
            ) : null}
        </>
    );
};

export default BurgerConstructor;