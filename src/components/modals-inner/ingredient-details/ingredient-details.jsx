import React from 'react';
import styles from './ingredient-details.module.css';
import PropTypes from "prop-types";
import {DATA_PROP_TYPES} from "../../../utils/consts";

const IngredientDetails = ({data, ingredientId}) => {

    const currentIngredient = data.find(item => item._id === ingredientId);

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

IngredientDetails.propTypes = {
    data: DATA_PROP_TYPES,
    ingredientId: PropTypes.string
};

export default IngredientDetails;