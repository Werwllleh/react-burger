import React, {useMemo, useState} from 'react';
import styles from "./draggable-card.module.css";
import CurrentPrice from "../../../current-price/current-price";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../../../../utils/consts";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../../../modal/modal";
import IngredientDetails from "../../../modals-inner/ingredient-details/ingredient-details";
import {addIngredientData, removeIngredientData} from "../../../../services/reducers/ingredient-specifications";


const DraggableCard = ({info, index}) => {

    console.log(index)

    const dispatch = useDispatch();
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
            item: {info, index},
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1
            })
        }), [])

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        dispatch(addIngredientData(info))
    };

    const closeModal = () => {
        setIsOpen(false)
        dispatch(removeIngredientData())
    }

    return (
        <>
            <div ref={dragRef} style={{opacity}} onClick={() => toggleModal(info._id)} key={info._id}
                 className={styles.item}>
                <img className={styles.image} src={info.image} alt={info.name}/>
                <div className={styles.price}>
                    <CurrentPrice size={'default'} sum={info.price}/>
                </div>
                <div className={`${styles.name} text text_type_main-default`}>
                    {info.name}
                </div>
                {count(info._id) > 0 ? <Counter count={count(info._id)} size="default" extraClass="counter"/> : null}
            </div>
            {isOpen ? (
                <Modal title="Детали ингредиента" onClose={closeModal}>
                    <IngredientDetails/>
                </Modal>
            ) : null}
        </>
    );
};

export default DraggableCard;