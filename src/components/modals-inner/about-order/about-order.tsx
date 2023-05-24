import React, {useEffect, useMemo} from 'react';
import styles from "./about-order.module.css";
import OrderIngredientIcon from "../../order-list/order-ingredient-icon/order-ingredient-icon";
import CurrentPrice from "../../current-price/current-price";
import {useLocation} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../utils/hooks/redux-hooks";
import {fetchOrderDetailData} from "../../../services/stores/action-creators";
import {IIngredient} from "../../../utils/types/types";
import {FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {route} from "../../../utils/consts";

const AboutOrder = (): JSX.Element => {

    const dispatch = useAppDispatch();
    const {orderInfo} = useAppSelector(state => state.orderDetailInfo);
    const {ingredients} = useAppSelector(state => state.ingredientsData);

    const location = useLocation();

    const orderNumber = location.pathname.split(`${route.FEED}/`)[1];

    useEffect(() => {
        dispatch(fetchOrderDetailData(orderNumber))
    }, []);

    const currentOrderInfo = orderInfo?.orders[0];

    const ingredientsCounts: {[key: string]: number} = {};

    currentOrderInfo?.ingredients.forEach((x: string) => {
        ingredientsCounts[x] = (ingredientsCounts[x] || 0) + 1;
    });

    const ingredientData = useMemo(() => {
        return Object.keys(ingredientsCounts).map((ingredientId) => (
            ingredients.find((el) => el._id === ingredientId)
        ))
    }, [ingredients, ingredientsCounts]);

    const productsPrice: number[] = [];
    for (let key in ingredientsCounts) {
        const ingredient = ingredients.find((el: IIngredient): boolean => el._id === key);
        if (ingredient) {
            productsPrice.push(ingredient.price * ingredientsCounts[key]);
        }
    }

    const orderSum: number = useMemo(() => {
        return productsPrice.reduce((accumulator: number, currentValue: number) => {
            return accumulator + (currentValue || 0);
        }, 0);
    }, [productsPrice]);

    return (
        <div className={styles.body}>
            <div className={styles.number}>
                <p className="text text_type_digits-default">#{orderNumber}</p>
            </div>
            <div className={styles.name}>
                <h1 className="text text_type_main-medium">{currentOrderInfo?.name}</h1>
                <div className={styles.status}>
                    {currentOrderInfo?.status === 'done' ? (
                        <p className={`text text_type_main-default ${styles.status_done}`}>Выполнен</p>
                    ) : currentOrderInfo?.status === 'pending' ? (
                        <p className={`text text_type_main-default ${styles.status_pending}`}>Ожидается</p>
                    ) : <p className={`text text_type_main-default ${styles.status_created}`}>Создан</p>}
                </div>
            </div>
            <div className={styles.structure}>
                <p className={'text text_type_main-medium mb-6'}>Состав:</p>
                <div className={styles.structure_body}>
                    {ingredientData.map((ingredient, index: number) => (
                        <div key={index} className={styles.structure_body_row}>
                            <OrderIngredientIcon ingredient={ingredient?._id}/>
                            <div className={styles.ingredient_name}>
                                <p className="text text_type_main-default">
                                    {ingredient?.name}
                                </p>
                            </div>
                            <div className={styles.counter}>
                                <div className={styles.count}>
                                    <p className="text text_type_digits-default">
                                        {ingredientsCounts[ingredient?._id ?? '']}
                                    </p>
                                </div>
                                <div className={styles.separator}><p className="text text_type_digits-default">x</p>
                                </div>
                                <CurrentPrice sum={ingredient?.price} size={'default'}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.date}>
                    <p className="text text_type_main-default text_color_inactive">
                        <FormattedDate date={new Date(currentOrderInfo?.createdAt ?? '')} />
                    </p>
                </div>
                <div className={styles.sum}>
                    <CurrentPrice sum={orderSum} size={'default'}/>
                </div>
            </div>
        </div>
    );
};

export default AboutOrder;