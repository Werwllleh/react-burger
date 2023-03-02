import React from 'react';
import styles from './card.module.css'
import CurrentPrice from "../../../current-price/current-price";


const Card = ({data}) => {

    return (
        <div className={styles.body}>
            {data.map(item =>
                <div key={item._id} className={styles.item}>
                    <img className={styles.image} src={item.image} alt={item.name}/>
                    <div className={styles.price}>
                        <CurrentPrice size={'default'} sum={item.price}/>
                    </div>
                    <div className={`${styles.name} text text_type_main-default`}>
                        {item.name}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;