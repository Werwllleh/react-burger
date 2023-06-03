import React from 'react';
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './my-constructor-element.module.css';
import {ItemTypes} from "../../../../utils/consts";
import {useDrop} from "react-dnd";
import {addToConstructor} from "../../../../services/stores/constructor-ingredients";
import bun_plug from '../../../../images/bun-plug.png'
import main_plug from '../../../../images/main-plug.png'
import DraggableConstructorCard from "../draggable-constructor-card/draggable-constructor-card";
import {IConstructorIngredient, IIngredient} from "../../../../utils/types/types";
import {useAppDispatch, useAppSelector} from "../../../../utils/hooks/redux-hooks";

const MyConstructorElement = (): JSX.Element => {

    const dispatch = useAppDispatch();
    const {bun, ingredients} = useAppSelector(state => state.constructorData)

    const [{canDrop, isOver}, dropTarget] = useDrop({
        accept: ItemTypes.CONSTRUCTOR_LIST,
        drop(ingredient: IIngredient): void {
            dispatch(addToConstructor(ingredient))
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    const isActive = canDrop && isOver

    return (
        <div ref={dropTarget} data-testid={'drop-zone'}
             className={isActive ? styles.body + ' ' + styles.body_drop : canDrop ? styles.body + ' ' + styles.body_act : styles.body}>
            {bun ? (
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={bun.name + ' (верх)'}
                    price={bun.price}
                    thumbnail={bun.image}
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
                    ingredients.map((item:IConstructorIngredient, index: number) => {
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
                    text={bun.name + ' (низ)'}
                    price={bun.price}
                    thumbnail={bun.image}
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