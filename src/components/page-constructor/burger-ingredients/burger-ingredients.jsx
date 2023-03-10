import React from 'react';
import styles from './burger-ingredients.module.css';

import Tabs from "./tabs/tabs";
import Category from "./category/category";
import PropTypes from "prop-types";

const BurgerIngredients = ({data}) => {

    const dataPropTypes = PropTypes.arrayOf(PropTypes.shape(
        {
            _id: PropTypes.string.isRequired,
            __v: PropTypes.number,
            type: PropTypes.string,
            proteins: PropTypes.number,
            price: PropTypes.number,
            name: PropTypes.string,
            image_mobile: PropTypes.string,
            image_large: PropTypes.string,
            image: PropTypes.string,
            fat: PropTypes.number,
            carbohydrates: PropTypes.number,
            calories: PropTypes.number,
        }
    ));

    BurgerIngredients.propTypes = {
        data: dataPropTypes.isRequired
    };

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