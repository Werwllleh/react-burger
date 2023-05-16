import React, {useMemo, useState} from 'react';
import styles from './burger-constructor.module.css';
import MyConstructorElement from "./my-constructor-element/my-constructor-element";
import CurrentPrice from "../../current-price/current-price";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../modal/modal";
import OrderDetails from "../../modals-inner/order-details/order-details";
import {fetchOrderNum} from "../../../services/stores/action-creators";
import {removeOrderData} from "../../../services/stores/order";
import {useLocation, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../utils/hooks/redux-hooks";
import {BUN} from "../../../utils/consts";
import {IConstructorIngredient} from "../../../utils/types/types";


const BurgerConstructor = (): JSX.Element => {

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();


  const {bun, ingredients} = useAppSelector(state => state.constructorData)

  const user = useAppSelector(state => state.userInfo.userData)

  const ingredientsPrice = useMemo(() => {
    return ingredients.reduce((accumulator: number, currentValue: IConstructorIngredient) => {
      return accumulator + (currentValue.price || 0);
    }, 0);
  }, [ingredients]);

  const bunsPrice: number = useMemo(() => {
    return (bun && bun.price * 2) || 0;
  }, [bun]);

  const price: number = useMemo(() => {
    return ingredientsPrice + bunsPrice
  }, [bunsPrice, ingredientsPrice])

  const orderArr: IConstructorIngredient[] = ingredients.length > 0 && bun ? ingredients.concat(bun) : [];

  const toggleModal = () => {
    if (user.name !== null && user.name !== undefined && user.name !== "") {
      let sendArr = orderArr.reduce((acc: string[], item: IConstructorIngredient) => {
        if (item.type === BUN) {
          acc.push(item._id, item._id);
        } else {
          acc.push(item._id);
        }
        return acc;
      }, []);
      dispatch(fetchOrderNum(sendArr));
      setIsOpen(!isOpen)
    } else {
      navigate('/login', {state: {from: location}});
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
        {orderArr && (
            <Button onClick={toggleModal} extraClass={styles.btn} htmlType="button" type="primary" size="large">
              Оформить заказ
            </Button>
        )}
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