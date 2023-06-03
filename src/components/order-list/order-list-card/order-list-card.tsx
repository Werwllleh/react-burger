import React, {useMemo} from 'react';
import styles from './order-list-card.module.css'
import OrderIngredientIcon from "../order-ingredient-icon/order-ingredient-icon";
import CurrentPrice from "../../current-price/current-price";
import {Link, useLocation} from "react-router-dom";
import {IFeedsIngredient, IIngredient} from "../../../utils/types/types";
import {useAppSelector} from "../../../utils/hooks/redux-hooks";
import {FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";


const OrderListCard = ({cardData}: { cardData: IFeedsIngredient }): JSX.Element => {

    const location = useLocation();

    const {ingredients} = useAppSelector(state => state.ingredientsData);

    const cardPrice: number[] = [];

    cardData.ingredients.map((ingredientId) => {
        return ingredients.filter((el) => el._id === ingredientId).map((el: IIngredient) => {
            return cardPrice.push(el.price)
        })
    })

    const orderSum = useMemo(() => {
        return cardPrice.reduce((accumulator: number, currentValue: number) => {
            return accumulator + (currentValue || 0);
        }, 0);
    }, [cardPrice]);


    return (
        <Link key={cardData._id}
              to={`${location.pathname}/${cardData.number}`} state={{background: location}}
              className={styles.link}
        >
            <div className={styles.body}>
                <div className={styles.content}>
                    <div className={styles.head}>
                        <div className={styles.order_number}>
                            <p className={'text text_type_digits-default'}>#{cardData.number}</p>
                        </div>
                        <div className={styles.order_date}>
                            <p className={'text text_type_main-default text_color_inactive'}>
                                <FormattedDate date={new Date(cardData.createdAt)} />
                            </p>
                        </div>
                    </div>
                    <div className={styles.name}>
                        <p className={'text text_type_main-medium'}>{cardData.name}</p>
                        {location.pathname !== '/feed' ? (
                            <div className={styles.status}>
                                {cardData.status === 'done' ? (
                                    <p className={`text text_type_main-default ${styles.status_done}`}>Выполнен</p>
                                ) : cardData.status === 'pending' ? (
                                    <p className={`text text_type_main-default ${styles.status_pending}`}>Готовится</p>
                                ) : (
                                    <p className={`text text_type_main-default ${styles.status_created}`}>Создан</p>
                                )}
                            </div>
                        ) : null}
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.ingredients_icons}>
                            {cardData.ingredients.slice(0, 5).map((ingredient: string, index: number) => (
                                <OrderIngredientIcon key={index} ingredient={ingredient}/>
                            ))}
                            <span className={`${styles.ingredients_icons_count} text text_type_digits-default`}>
                               {cardData.ingredients.length > 5 ? `+ ${cardData.ingredients.length - 5}` : null}
                            </span>
                        </div>
                        <div className={styles.total}>
                            <CurrentPrice sum={orderSum} size={'medium'}/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default OrderListCard;