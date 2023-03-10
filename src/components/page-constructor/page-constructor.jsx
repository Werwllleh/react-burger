import React from 'react';
import styles from './page-constructor.module.css'
import BurgerIngredients from "./burger-ingredients/burger-ingredients";
import BurgerConstructor from "./burger-constructor/burger-constructor";
import PropTypes from "prop-types";

const PageConstructor = ({fetchingData}) => {

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

    PageConstructor.propTypes = {
        fetchingData: dataPropTypes.isRequired
    };

    return (
        <section>
            <div className="container">
                <div className={styles.body}>
                    <div className={styles.column}>
                        <h1 className='text text_type_main-large mb-5'>Соберите бургер</h1>
                        <BurgerIngredients data={fetchingData}/>
                    </div>
                    <div className={styles.column}>
                        <BurgerConstructor data={fetchingData}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageConstructor;