import React from 'react';
import styles from "./about-order.module.css";
import OrderIngredientIcon from "../../order-list/order-ingredient-icon/order-ingredient-icon";
import CurrentPrice from "../../current-price/current-price";

const AboutOrder = ():JSX.Element => {
    return (
        <div className={styles.body}>
            <div className={styles.number}>
                <p className="text text_type_digits-default">#034533</p>
            </div>
            <div className={styles.name}>
                <h1 className="text text_type_main-medium">Black Hole Singularity острый бургер</h1>
                <div className={styles.status}>
                    <p className="text text_type_main-small">Выполнен</p>
                </div>
            </div>
            <div className={styles.structure}>
                <p className={'text text_type_main-medium mb-6'}>Состав:</p>
                <div className={styles.structure_body}>
                    <div className={styles.structure_body_row}>
                        <OrderIngredientIcon/>
                        <div className={styles.ingredient_name}>
                            <p className="text text_type_main-default">
                                Флюоресцентная булка R2-D3
                            </p>
                        </div>
                        <div className={styles.counter}>
                            <div className={styles.count}>
                                <p className="text text_type_digits-default">2</p>
                            </div>
                            <div className={styles.separator}><p className="text text_type_digits-default">x</p></div>
                            <CurrentPrice sum={2323} size={'default'}/>
                        </div>
                    </div>
                    <div className={styles.structure_body_row}>
                        <OrderIngredientIcon/>
                        <div className={styles.ingredient_name}>
                            <p className="text text_type_main-default">
                                Флюоресцентная булка R2-D3
                            </p>
                        </div>
                        <div className={styles.counter}>
                            <div className={styles.count}>
                                <p className="text text_type_digits-default">2</p>
                            </div>
                            <div className={styles.separator}><p className="text text_type_digits-default">x</p></div>
                            <CurrentPrice sum={2323} size={'default'}/>
                        </div>
                    </div>
                    <div className={styles.structure_body_row}>
                        <OrderIngredientIcon/>
                        <div className={styles.ingredient_name}>
                            <p className="text text_type_main-default">
                                Флюоресцентная булка R2-D3
                            </p>
                        </div>
                        <div className={styles.counter}>
                            <div className={styles.count}>
                                <p className="text text_type_digits-default">2</p>
                            </div>
                            <div className={styles.separator}><p className="text text_type_digits-default">x</p></div>
                            <CurrentPrice sum={2323} size={'default'}/>
                        </div>
                    </div>
                    <div className={styles.structure_body_row}>
                        <OrderIngredientIcon/>
                        <div className={styles.ingredient_name}>
                            <p className="text text_type_main-default">
                                Флюоресцентная булка R2-D3
                            </p>
                        </div>
                        <div className={styles.counter}>
                            <div className={styles.count}>
                                <p className="text text_type_digits-default">2</p>
                            </div>
                            <div className={styles.separator}><p className="text text_type_digits-default">x</p></div>
                            <CurrentPrice sum={2323} size={'default'}/>
                        </div>
                    </div>
                    <div className={styles.structure_body_row}>
                        <OrderIngredientIcon/>
                        <div className={styles.ingredient_name}>
                            <p className="text text_type_main-default">
                                Флюоресцентная булка R2-D3
                            </p>
                        </div>
                        <div className={styles.counter}>
                            <div className={styles.count}>
                                <p className="text text_type_digits-default">2</p>
                            </div>
                            <div className={styles.separator}><p className="text text_type_digits-default">x</p></div>
                            <CurrentPrice sum={2323} size={'default'}/>
                        </div>
                    </div>
                    <div className={styles.structure_body_row}>
                        <OrderIngredientIcon/>
                        <div className={styles.ingredient_name}>
                            <p className="text text_type_main-default">
                                Флюоресцентная булка R2-D3
                            </p>
                        </div>
                        <div className={styles.counter}>
                            <div className={styles.count}>
                                <p className="text text_type_digits-default">2</p>
                            </div>
                            <div className={styles.separator}><p className="text text_type_digits-default">x</p></div>
                            <CurrentPrice sum={2323} size={'default'}/>
                        </div>
                    </div>
                    <div className={styles.structure_body_row}>
                        <OrderIngredientIcon/>
                        <div className={styles.ingredient_name}>
                            <p className="text text_type_main-default">
                                Флюоресцентная булка R2-D3
                            </p>
                        </div>
                        <div className={styles.counter}>
                            <div className={styles.count}>
                                <p className="text text_type_digits-default">2</p>
                            </div>
                            <div className={styles.separator}><p className="text text_type_digits-default">x</p></div>
                            <CurrentPrice sum={2323} size={'default'}/>
                        </div>
                    </div>
                    <div className={styles.structure_body_row}>
                        <OrderIngredientIcon/>
                        <div className={styles.ingredient_name}>
                            <p className="text text_type_main-default">
                                Флюоресцентная булка R2-D3
                            </p>
                        </div>
                        <div className={styles.counter}>
                            <div className={styles.count}>
                                <p className="text text_type_digits-default">2</p>
                            </div>
                            <div className={styles.separator}><p className="text text_type_digits-default">x</p></div>
                            <CurrentPrice sum={2323} size={'default'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.date}>
                    <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20</p>
                </div>
                <CurrentPrice sum={999} size={'default'} />
            </div>
        </div>
    );
};

export default AboutOrder;