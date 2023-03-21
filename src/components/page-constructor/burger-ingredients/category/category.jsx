import React from 'react';
import styles from './category.module.css';
import Card from "../card/card";
import PropTypes from "prop-types";
import {DATA_PROP_TYPES} from "../../../../utils/consts";
import {useSelector} from "react-redux";

const Category = ({name, data}) => {

    return (
        <div className={`${styles.body} mt-10`}>
            <h2 className={'text text_type_main-medium mb-6'}>{name}</h2>
            <div className={styles.listItems}>
                <Card data={data}/>
            </div>
        </div>
    );
};

Category.propTypes = {
    name: PropTypes.string.isRequired,
    data: DATA_PROP_TYPES
};

export default Category;