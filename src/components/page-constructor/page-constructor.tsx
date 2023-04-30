import React from 'react';
import styles from './page-constructor.module.css'
import BurgerIngredients from "./burger-ingredients/burger-ingredients";
import BurgerConstructor from "./burger-constructor/burger-constructor";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const PageConstructor = (): JSX.Element => {

    return (
        <section>
            <DndProvider backend={HTML5Backend}>
                <div className="container">
                    <div className={styles.body}>
                        <div className={styles.column}>
                            <h1 className='text text_type_main-large mb-5'>Соберите бургер</h1>
                            <BurgerIngredients />
                        </div>
                        <div className={styles.column}>
                            <BurgerConstructor />
                        </div>
                    </div>
                </div>
            </DndProvider>
        </section>
    );
};

export default PageConstructor;