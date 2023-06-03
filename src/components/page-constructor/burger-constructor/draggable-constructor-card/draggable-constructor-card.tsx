import React, {useRef} from 'react';
import styles from "./draggable-constructor-card.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {removeFromConstructor, updateConstructorIngredients} from "../../../../services/stores/constructor-ingredients";
import {useDrag, useDrop, XYCoord} from "react-dnd";
import {ItemTypes} from "../../../../utils/consts";
import {IConstructorIngredient} from "../../../../utils/types/types";
import {useAppDispatch} from "../../../../utils/hooks/redux-hooks";


interface DraggableConstructorCardProps {
    index: number;
    item: IConstructorIngredient;
}

const DraggableConstructorCard = ({index, item}: DraggableConstructorCardProps): JSX.Element => {

    const ref = useRef<HTMLDivElement | null>(null)
    const dispatch = useAppDispatch();
    const removeIngredient = (id: string) => {
        dispatch(removeFromConstructor({id}))
    }

    const [{isDragging}, dragRef] = useDrag({
        type: ItemTypes.CONSTRUCTOR_CONTAINER,
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    })

    const [, dropRef] = useDrop({
        accept: ItemTypes.CONSTRUCTOR_CONTAINER,
        hover(item: { index: number }, monitor) {

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
            const clientOffset: XYCoord | null = monitor.getClientOffset();
            if (clientOffset === null) {
                return;
            }
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


    dragRef(dropRef(ref))
    const opacity = isDragging ? 0.2 : 1

    return (
        <div ref={ref} className={styles.item} style={{opacity}}>
            <div className={styles.icon}>
                <DragIcon type="primary"/>
            </div>
            <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                handleClose={() => removeIngredient(item.key)}
            />
        </div>
    );
};

export default DraggableConstructorCard;