import React from 'react';
import {DragIcon, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './my-constructor-element.module.css';
import {DATA_PROP_TYPES} from "../../../../utils/consts";

const MyConstructorElement = ({data}) => {

    const additions = data.filter(addition => addition.type !== "bun");
    const buns = data.filter(addition => addition.type === "bun")

    return (
        <div className={styles.body}>
            <ConstructorElement
                type="top"
                isLocked={true}
                text={buns[0].name + ' (верх)'}
                price={buns[0].price}
                thumbnail={buns[0].image}
            />
            <div className={styles.list}>
            {additions.map((el) => {
                return (
                    <div key={el._id} className={styles.item}>
                        <div className={styles.icon}>
                            <DragIcon type="primary" />
                        </div>
                        <ConstructorElement
                            text={el.name}
                            price={el.price}
                            thumbnail={el.image}
                        />
                    </div>
                   )
            })}
            </div>
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text={buns[0].name + ' (низ)'}
                price={buns[0].price}
                thumbnail={buns[0].image}
            />
        </div>
    );
};

MyConstructorElement.propTypes = {
    data: DATA_PROP_TYPES
};

export default MyConstructorElement;