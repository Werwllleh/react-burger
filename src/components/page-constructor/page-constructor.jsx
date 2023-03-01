import React from 'react';
import styles from './page-constructor.module.css'
import BurgerIngredients from "./burger-ingredients/burger-ingredients";
import BurgerConstructor from "./burger-constructor/burger-constructor";

const PageConstructor = () => {
    return (
        <section>
            <div className="container">
                <div className={styles.body}>
                    <div className={styles.column}>
                        <h1 className='text text_type_main-large mb-5'>Соберите бургер</h1>
                        <BurgerIngredients/>
                    </div>
                    <div className={styles.column}>
                        <BurgerConstructor/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageConstructor;