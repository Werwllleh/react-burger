import React from 'react';
import styles from './category.module.css';
import Card from "../card/card";
import PropTypes from "prop-types";

const Category = ({name, data}) => {

    const dataPropTypes = PropTypes.arrayOf(PropTypes.shape(
        {
            _id: PropTypes.string.isRequired,
            __v: PropTypes.number,
            type: PropTypes.string,
            proteins: PropTypes.number,
            price: PropTypes.number,
            name: PropTypes.string,
            image_mobile: PropTypes.string,
            image_large: PropTypes.string,
            image: PropTypes.string,
            fat: PropTypes.number,
            carbohydrates: PropTypes.number,
            calories: PropTypes.number,
        }
    ));

    Category.propTypes = {
        name: PropTypes.string.isRequired,
        data: dataPropTypes.isRequired
    };

    return (
        <div className={`${styles.body} mt-10`}>
            <h2 className={'text text_type_main-medium mb-6'}>{name}</h2>
            <div className={styles.listItems}>
                <Card data={data}/>
            </div>
        </div>
    );
};

export default Category;