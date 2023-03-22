import React, { useEffect, useRef } from 'react';
import styles from './burger-ingredients.module.css';
import Tabs from "./tabs/tabs";
import Category from "./category/category";
import {useDispatch, useSelector} from "react-redux";
import {fetchIngredients} from "../../../services/reducers/actionCreators";
import {BUN, FILLINGS, SAUCE} from "../../../utils/consts";


const BurgerIngredients = () => {

    const dispatch = useDispatch();

    const {ingredients} = useSelector(state => state.ingredientsReducer);

    const buns = ingredients.filter(cat => cat.type === BUN);
    const sauces = ingredients.filter(cat => cat.type === SAUCE);
    const mains = ingredients.filter(cat => cat.type === FILLINGS);


    useEffect(() => {
        dispatch(fetchIngredients())
    }, [dispatch]);


    return (
        <>
            <Tabs/>
            <div className={styles.catList}>
                <Category name={'Булки'} data={buns}/>
                <Category name={'Соусы'} data={sauces}/>
                <Category name={'Начинки'} data={mains}/>
            </div>

        </>
    );
};

BurgerIngredients.propTypes = {
    // fetchIngredients: PropTypes.string
    // data: DATA_PROP_TYPES
};

export default BurgerIngredients;