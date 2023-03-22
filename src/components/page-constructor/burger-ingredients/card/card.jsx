import React, {useState} from 'react';
import styles from './card.module.css'
import Modal from "../../../modal/modal";
import IngredientDetails from "../../../modals-inner/ingredient-details/ingredient-details";
import DraggableCard from "../draggable-card/draggable-card";
import {DATA_PROP_TYPES} from "../../../../utils/consts";

const Card = ({data}) => {

    return (
        <div className={styles.body}>
            {data.map(item =>
                <DraggableCard key={item._id} info={item}/>
            )}
        </div>
    );
};

Card.propTypes = {
    data: DATA_PROP_TYPES,
};

export default Card;