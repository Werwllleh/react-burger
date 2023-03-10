import React from 'react';
import styles from './burger-ingredients.module.css';
import Tabs from "./tabs/tabs";
import Category from "./category/category";
import {DATA_PROP_TYPES} from "../../../utils/consts";

const BurgerIngredients = ({data}) => {

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