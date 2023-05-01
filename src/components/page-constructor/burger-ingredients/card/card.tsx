import React from 'react';
import styles from './card.module.css'
import DraggableCard from "../draggable-card/draggable-card";
import {IIngredientArr} from "../../../../utils/types/types";

interface CardProps {
    data: IIngredientArr[];
}

const Card = ({data}: CardProps): JSX.Element => {

    return (
        <div className={styles.body}>
            {data.map((item) =>
                <DraggableCard key={item._id} info={item}/>
            )}
        </div>
    );
};

export default Card;