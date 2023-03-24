import React from 'react';
import styles from './card.module.css'
import DraggableCard from "../draggable-card/draggable-card";
import {DATA_PROP_TYPES} from "../../../../utils/consts";

const Card = ({data}) => {

    return (
        <div className={styles.body}>
            {data.map((item, index) =>
                <DraggableCard key={item._id} index={index} info={item}/>
            )}
        </div>
    );
};

Card.propTypes = {
    data: DATA_PROP_TYPES,
};

export default Card;