import React from 'react';
import styles from './ingredient-details.module.css';
import PropTypes from "prop-types";

const IngredientDetails = ({data, ingredientId}) => {

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

    IngredientDetails.propTypes = {
        data: dataPropTypes.isRequired,
        ingredientId: PropTypes.string
    };

    const currentIngredient = data.filter(item => item._id === ingredientId)[0];

    return (
        <div className={styles.body}>
            <img className={styles.img} src={currentIngredient.image_large} alt={currentIngredient.name}/>
            <div className={`${styles.name} text text_type_main-medium`}>
                {currentIngredient.name}
            </div>
            <div className={`${styles.about} text text_type_main-default text_color_inactive`}>
                <div className={styles.col}>
                    <div className={styles.parameter}>
                        Калории, ккал
                    </div>
                    <div className={`text_type_digits-default`}>
                        {currentIngredient.calories}
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.parameter}>
                        Белки, г
                    </div>
                    <div className={`text_type_digits-default`}>
                        {currentIngredient.proteins}
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.parameter}>
                        Жиры, г
                    </div>
                    <div className={`text_type_digits-default`}>
                        {currentIngredient.fat}
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.parameter}>
                        Углеводы, г
                    </div>
                    <div className={`text_type_digits-default`}>
                        {currentIngredient.carbohydrates}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IngredientDetails;