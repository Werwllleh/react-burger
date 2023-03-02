import React from 'react';
import styles from './category.module.css';
import Card from "../card/card";

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

export default Category;