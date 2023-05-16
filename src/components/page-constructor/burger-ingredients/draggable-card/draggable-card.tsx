import React, {useMemo} from 'react';
import styles from "./draggable-card.module.css";
import CurrentPrice from "../../../current-price/current-price";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../../../../utils/consts";
import {Link, useLocation} from "react-router-dom";
import {IIngredient} from "../../../../utils/types/types";
import {useAppSelector} from "../../../../utils/hooks/redux-hooks";

interface DraggableCardProps {
    ingredient: IIngredient;
}

const DraggableCard = ({ingredient}: DraggableCardProps): JSX.Element => {

    const location = useLocation();
    const ingredientId = ingredient['_id'];

    const {bun, ingredients} = useAppSelector(state => state.constructorData)

    const countedItems = useMemo(() => {
        const usedAllIngredients = ingredients.map((item) => item.ingredient._id).concat(bun?.ingredient._id || []);
        return usedAllIngredients.reduce((usedIngs: { [key: string]: number }, item: string) => {
            const currCount = usedIngs[item] || 0;
            return Object.assign({}, usedIngs, {[item]: currCount + 1});
        }, {});
    }, [bun, ingredients]);

    const count = (key: string) => {
        return countedItems[key];
    };

    const [{opacity}, dragRef] = useDrag(
        () => ({
            type: ItemTypes.CONSTRUCTOR_LIST,
            item: ingredient,
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1
            })
        }), [])

    return (
        <>
            <Link key={ingredientId} to={`/ingredients/${ingredientId}`} state={{background: location}}
                  className={styles.link}>
                <div ref={dragRef} style={{opacity}} className={styles.item}>
                    <img className={styles.image} src={ingredient.image} alt={ingredient.name}/>
                    <div className={styles.price}>
                        <CurrentPrice size={'default'} sum={ingredient.price}/>
                    </div>
                    <div className={`${styles.name} text text_type_main-default`}>
                        {ingredient.name}
                    </div>
                    {count(ingredient._id) > 0 ?
                        <Counter count={count(ingredient._id)} size="default" extraClass="counter"/> : null}
                </div>
            </Link>
        </>
    );
};

export default DraggableCard;