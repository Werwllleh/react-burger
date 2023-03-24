import React from 'react';
import {DragIcon, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './my-constructor-element.module.css';
import {DATA_PROP_TYPES, ItemTypes} from "../../../../utils/consts";
import {useDispatch, useSelector} from "react-redux";
import { useDrop} from "react-dnd";
import {
    addToConstructor,
    removeFromConstructor,
    updateConstructorIngredients
} from "../../../../services/reducers/constructor-ingredients";
import bun_plug from '../../../../images/bun-plug.png'
import main_plug from '../../../../images/main-plug.png'


const MyConstructorElement = () => {

    const dispatch = useDispatch();
    const {bun, ingredients} = useSelector(state => state.constructorReducer);

    const removeIngredient = (id) => {
        dispatch(removeFromConstructor({id}))
    }

    const [{canDrop, isOver}, dropTarget] = useDrop({
        accept: ItemTypes.CONSTRUCTOR_LIST,
        drop(info) {
            dispatch(addToConstructor(info))
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    const isActive = canDrop && isOver

    return (
        <div ref={dropTarget}
             className={isActive ? styles.body + ' ' + styles.body_drop : canDrop ? styles.body + ' ' + styles.body_act : styles.body}>
            {bun ? (
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={bun.info.name + ' (верх)'}
                    price={bun.info.price}
                    thumbnail={bun.info.image}
                />
            ) : (
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={'Место для верхней булки'}
                    price={0}
                    thumbnail={bun_plug}
                />
            )}
            <div className={styles.list}>
                {ingredients.length > 0 ? (
                    ingredients.map((el) => {
                        return (
                            <div key={el.key} className={styles.item} >
                                <div className={styles.icon}>
                                    <DragIcon type="primary"/>
                                </div>
                                <ConstructorElement
                                    text={el.info.name}
                                    price={el.info.price}
                                    thumbnail={el.info.image}
                                    handleClose={() => removeIngredient(el.key)}
                                />
                            </div>
                        )
                    })
                ) : (
                    <div className={styles.item}>
                        <ConstructorElement
                            text={'Место для начинок и соусов'}
                            price={0}
                            thumbnail={main_plug}
                        />
                    </div>
                )}

            </div>
            {bun ? (
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={bun.info.name + ' (низ)'}
                    price={bun.info.price}
                    thumbnail={bun.info.image}
                />
            ) : (
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={'Место для нижней булки'}
                    price={0}
                    thumbnail={bun_plug}
                />
            )}
        </div>
    );
};


/*MyConstructorElement.propTypes = {
    data: DATA_PROP_TYPES
};*/

export default MyConstructorElement;