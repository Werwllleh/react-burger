import React from 'react';
import {DragIcon, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './my-constructor-element.module.css';
import PropTypes from "prop-types";

const MyConstructorElement = ({data}) => {

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

    MyConstructorElement.propTypes = {
        data: dataPropTypes.isRequired
    };

    const additions = data.filter(addition => addition.type !== "bun");
    const buns = data.filter(addition => addition.type === "bun")


    return (
        <div className={styles.body}>
            <ConstructorElement
                type="top"
                isLocked={true}
                text={buns[0].name}
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
                text={buns[0].name}
                price={buns[0].price}
                thumbnail={buns[0].image}
            />
        </div>
    );
};

export default MyConstructorElement;