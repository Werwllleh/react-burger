import React from 'react';
import styles from './page-constructor.module.css'
import BurgerIngredients from "./burger-ingredients/burger-ingredients";
import BurgerConstructor from "./burger-constructor/burger-constructor";
import {DATA_PROP_TYPES} from "../../utils/consts";

const PageConstructor = ({fetchingData}) => {

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

PageConstructor.propTypes = {
    fetchingData: DATA_PROP_TYPES
};

export default PageConstructor;