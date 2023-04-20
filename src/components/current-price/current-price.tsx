import React from 'react';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './current-price.module.css'
import PropTypes from "prop-types";

const CurrentPrice = ({sum, size}) => {

    return (
        <div className={styles.body}>
            <span className={styles.sum}>
                <p className={`text text_type_digits-${size}`}>{sum}</p>
            </span>
            <CurrencyIcon type="primary"/>
        </div>
    );
};

CurrentPrice.propTypes = {
    sum: PropTypes.number,
    size: PropTypes.string
};

export default CurrentPrice;