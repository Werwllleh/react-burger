import React from 'react';
import styles from './order-ingredient-icon.module.css';
import {useAppSelector} from "../../../utils/hooks/redux-hooks";
import {IIngredient} from "../../../utils/types/types";

const OrderIngredientIcon = ({ingredient}: { ingredient: string | undefined}): JSX.Element => {

    const {ingredients} = useAppSelector(state => state.ingredientsData);

    const icon: IIngredient | undefined = ingredients.find((el) => el._id === ingredient);

    return (
        <div className={styles.body}>
            <img className={styles.icon} src={icon?.image} alt={icon?.name}/>
        </div>
    );
};

export default OrderIngredientIcon;