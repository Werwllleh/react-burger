import React from 'react';
import styles from './order-list-card.module.css'
import OrderIngredientIcon from "../order-ingredient-icon/order-ingredient-icon";
import CurrentPrice from "../../current-price/current-price";
import {Link, useLocation} from "react-router-dom";
import {IFeedsIngredient} from "../../../utils/types/types";


const OrderListCard = ({cardData}: { cardData: IFeedsIngredient }): JSX.Element => {

    console.log(cardData)

    cardData.ingredients.map(el => console.log(el))

    const location = useLocation();

    return (
        <Link /*key={ingredientId}*/
            to={'/feed/333'} state={{background: location}}
            className={styles.link}
        >
            <div className={styles.body}>
                <div className={styles.content}>
                    <div className={styles.head}>
                        <div className={styles.order_number}>
                            <p className={'text text_type_digits-default'}>#{cardData.number}</p>
                        </div>
                        <div className={styles.order_date}>
                            <p className={'text text_type_main-default text_color_inactive'}>{cardData.createdAt}</p>
                        </div>
                    </div>
                    <div className={styles.name}>
                        <p className={'text text_type_main-medium'}>{cardData.name}</p>
                        {location.pathname !== '/feed' ? (
                            <div className={styles.status}>
                                <p className={'text text_type_main-small'}>{cardData.status}</p>
                            </div>
                        ) : null}
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.ingredients_icons}>
                            {cardData.ingredients.slice(0,5).map(el => (
                                <OrderIngredientIcon/>
                            ))}
                            <span className={`${styles.ingredients_icons_count} text text_type_digits-default`}>
                               {cardData.ingredients.length > 5 ? `+ ${cardData.ingredients.length - 5}` : null}
                            </span>
                        </div>
                        <div className={styles.total}>
                            <CurrentPrice sum={480} size={'medium'}/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default OrderListCard;