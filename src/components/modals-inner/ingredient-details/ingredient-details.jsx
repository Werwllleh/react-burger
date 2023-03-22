import React from 'react';
import styles from './ingredient-details.module.css';
import PropTypes from "prop-types";
import {DATA_PROP_TYPES} from "../../../utils/consts";
import {useSelector} from "react-redux";

const IngredientDetails = ({id}) => {

    const {ingredients} = useSelector(state => state.ingredientsReducer);
    const currentIngredient = ingredients.find(item => item.info._id === id);

    console.log(ingredients)

    return (
        <div className={styles.body}>
            <img className={styles.img} src={currentIngredient.info.image_large} alt={currentIngredient.info.name}/>
            <div className={`${styles.name} text text_type_main-medium`}>
                {currentIngredient.info.name}
            </div>
            <div className={`${styles.about} text text_type_main-default text_color_inactive`}>
                <div className={styles.col}>
                    <div className={styles.parameter}>
                        Калории, ккал
                    </div>
                    <div className={`text_type_digits-default`}>
                        {currentIngredient.info.calories}
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.parameter}>
                        Белки, г
                    </div>
                    <div className={`text_type_digits-default`}>
                        {currentIngredient.info.proteins}
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.parameter}>
                        Жиры, г
                    </div>
                    <div className={`text_type_digits-default`}>
                        {currentIngredient.info.fat}
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.parameter}>
                        Углеводы, г
                    </div>
                    <div className={`text_type_digits-default`}>
                        {currentIngredient.info.carbohydrates}
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