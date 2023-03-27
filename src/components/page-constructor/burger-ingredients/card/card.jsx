import React from 'react';
import styles from './card.module.css'
import DraggableCard from "../draggable-card/draggable-card";
import {DATA_PROP_TYPES} from "../../../../utils/consts";
import PropTypes from "prop-types";


const Card = ({data}) => {

    return (
        <div className={styles.body}>
            {data.map((item) =>
                <DraggableCard key={item._id} info={item} />
            )}
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.arrayOf(DATA_PROP_TYPES).isRequired
};

export default Card;