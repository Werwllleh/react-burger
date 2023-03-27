import React from 'react';
import { ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './my-constructor-element.module.css';
import {ItemTypes} from "../../../../utils/consts";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {addToConstructor} from "../../../../services/stores/constructor-ingredients";
import bun_plug from '../../../../images/bun-plug.png'
import main_plug from '../../../../images/main-plug.png'
import DraggableConstructorCard from "../draggable-constructor-card/draggable-constructor-card";


const MyConstructorElement = () => {

    const dispatch = useDispatch();
    const {bun, ingredients} = useSelector(state => state.constructorReducer);

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
                    ingredients.map((item, index) => {
                        return (
                            <div key={item.key}>
                                <DraggableConstructorCard item={item} index={index}/>
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

export default MyConstructorElement;