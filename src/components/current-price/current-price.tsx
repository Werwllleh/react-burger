import React, {FC} from 'react';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './current-price.module.css'

interface CurrentPriceProps {
    sum: number;
    size: string
}

const CurrentPrice: FC<CurrentPriceProps> = ({sum, size}) => {

    return (
        <div className={styles.body}>
            <span className={styles.sum}>
                <p className={`text text_type_digits-${size}`}>{sum}</p>
            </span>
            <CurrencyIcon type="primary"/>
        </div>
    );
};

export default CurrentPrice;