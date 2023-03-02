import React from 'react';
import data from '../../../utils/data';
import styles from './burger-ingredients.module.css';

import Tabs from "./tabs/tabs";
import Category from "./category/category";

const BurgerIngredients = () => {

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

export default BurgerIngredients;