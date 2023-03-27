import React from 'react';
import Card from "../card/card";
import PropTypes from "prop-types";
import {DATA_PROP_TYPES} from "../../../../utils/consts";

const Category = ({name, data}) => {


    return (
        <div className={`mt-10`}>
            <h2 className={'text text_type_main-medium mb-6'}>{name}</h2>
            <div>
                <Card data={data}/>
            </div>
        </div>
    );
};

Category.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(DATA_PROP_TYPES).isRequired
};

export default Category;