import React from 'react';
import styles from './ingredient-details.module.css';
import { useSelector} from "react-redux";


const IngredientDetails = () => {

    const data = useSelector(state => state.ingredientSpecificationsReducer)

    return (
        <div className={styles.body}>
            <img className={styles.img} src={data.image} alt={data.name}/>
            <div className={`${styles.name} text text_type_main-medium`}>
                {data.name}
            </div>
            <div className={`${styles.about} text text_type_main-default text_color_inactive`}>
                <div className={styles.col}>
                    <div className={styles.parameter}>
                        Калории, ккал
                    </div>
                    <div className={`text_type_digits-default`}>
                        {data.specifications.calories}
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.parameter}>
                        Белки, г
                    </div>
                    <div className={`text_type_digits-default`}>
                        {data.specifications.proteins}
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.parameter}>
                        Жиры, г
                    </div>
                    <div className={`text_type_digits-default`}>
                        {data.specifications.fat}
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.parameter}>
                        Углеводы, г
                    </div>
                    <div className={`text_type_digits-default`}>
                        {data.specifications.carbohydrates}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IngredientDetails;