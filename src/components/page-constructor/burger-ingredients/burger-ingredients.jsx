import React, {useEffect} from 'react';
import styles from './burger-ingredients.module.css';
import Tabs from "./tabs/tabs";
import Category from "./category/category";
import {DATA_PROP_TYPES} from "../../../utils/consts";
import {useDispatch, useSelector} from "react-redux";
import {fetchIngredients} from "../../../services/reducers/actionCreators";


const BurgerIngredients = ({data}) => {

    const dispatch = useDispatch();

    const {ingredients} = useSelector(state => state.ingredientsReducer);


    useEffect(() => {
        dispatch(fetchIngredients())
    }, [dispatch])

    console.log(ingredients)

    return (
        <>
            <Tabs/>
            <div className={styles.catList}>
                <Category name={'Булки'} data={data.filter(cat => cat.type === 'bun')}/>
                <Category name={'Соусы'} data={data.filter(cat => cat.type === 'sauce')}/>
                <Category name={'Начинки'} data={data.filter(cat => cat.type === 'main')}/>
            </div>
        </>
    );
};

BurgerIngredients.propTypes = {
    data: DATA_PROP_TYPES
};

export default BurgerIngredients;