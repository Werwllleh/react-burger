import React, {useMemo} from 'react';
import styles from "./draggable-card.module.css";
import CurrentPrice from "../../../current-price/current-price";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../../../../utils/consts";
import {useSelector} from "react-redux";

const DraggableCard = ({info, id}) => {

    const {bun, ingredients} = useSelector(state => state.constructorReducer);

    const countedItems = useMemo(() => {
        const usedAllIngredients = ingredients.map((item) => item.info._id).concat(bun?.info._id || []);
        return usedAllIngredients.reduce((usedIngs, item) => {
            const currCount = usedIngs[item] || 0;
            return Object.assign({}, usedIngs, {[item]: currCount + 1});
        }, {});
    }, [bun, ingredients]);

    const count = (key) => {
        return countedItems[key];
    };

    const [{opacity}, dragRef] = useDrag(
        () => ({
            type: ItemTypes.CONSTRUCTOR_LIST,
            item: {info},
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1
            })
        }), [])

    return (
        <div ref={dragRef} style={{opacity}} /*onClick={() => toggleModal(info._id)}*/ key={info._id} className={styles.item}>
            <img className={styles.image} src={info.image} alt={info.name}/>
            <div className={styles.price}>
                <CurrentPrice size={'default'} sum={info.price}/>
            </div>
            <div className={`${styles.name} text text_type_main-default`}>
                {info.name}
            </div>
            {count(id) > 0 ? <Counter count={count(id)} size="default" extraClass="counter"/> : null}
        </div>
    );
};

export default DraggableCard;