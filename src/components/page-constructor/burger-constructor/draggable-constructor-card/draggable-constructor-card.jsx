import React, {useRef} from 'react';
import styles from "./draggable-constructor-card.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch} from "react-redux";
import {removeFromConstructor, updateConstructorIngredients} from "../../../../services/reducers/constructor-ingredients";
import {useDrag, useDrop} from "react-dnd";
import { ItemTypes} from "../../../../utils/consts";
import PropTypes from "prop-types";

const DraggableConstructorCard = ({index, item}) => {

    const ref = useRef(null)
    const dispatch = useDispatch();
    const removeIngredient = (id) => {
        dispatch(removeFromConstructor({id}))
    }

    const [{isDragging}, dragRef] = useDrag({
        type: ItemTypes.CONSTRUCTOR_CONTAINER,
        item: {index},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    })

    const [, dropRef] = useDrop({
        accept: ItemTypes.CONSTRUCTOR_CONTAINER,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            dispatch(updateConstructorIngredients({dragIndex, hoverIndex}))

            item.index = hoverIndex

        },
    })

    const dragDropRef = dragRef(dropRef(ref))
    const opacity = isDragging ? 0.2 : 1

    return (
        <div ref={dragDropRef} className={styles.item} style={{opacity}}>
            <div className={styles.icon}>
                <DragIcon type="primary"/>
            </div>
            <ConstructorElement
                text={item.info.name}
                price={item.info.price}
                thumbnail={item.info.image}
                handleClose={() => removeIngredient(item.key)}
            />
        </div>
    );
};

DraggableConstructorCard.propTypes = {
    index: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired
};

export default DraggableConstructorCard;