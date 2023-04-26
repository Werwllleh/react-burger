import React from 'react';
import styles from './ingredient-details.module.css';
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";


const IngredientDetails = () => {

    const location = useLocation();
    const currentId = location.pathname.split('/ingredients/')[1];
    //@ts-ignore
    const ingredients = useSelector(state => state.ingredientsReducer.ingredients);
    //@ts-ignore
    const data = ingredients.filter(item => item._id === currentId)[0];

    return (
        <div className={styles.body}>
            <img className={styles.img} src={data?.image} alt={data?.name}/>
            <div className={`${styles.name} text text_type_main-medium`}>
                {data?.name}
            </div>
            <div className={`${styles.about} text text_type_main-default text_color_inactive`}>
                <div className={styles.col}>
                    <div className={styles.parameter}>
                        Калории, ккал
                    </div>
                    <div className={`text_type_digits-default`}>
                        {data?.calories}
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.parameter}>
                        Белки, г
                    </div>
                    <div className={`text_type_digits-default`}>
                        {data?.proteins}
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.parameter}>
                        Жиры, г
                    </div>
                    <div className={`text_type_digits-default`}>
                        {data?.fat}
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.parameter}>
                        Углеводы, г
                    </div>
                    <div className={`text_type_digits-default`}>
                        {data?.carbohydrates}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IngredientDetails;