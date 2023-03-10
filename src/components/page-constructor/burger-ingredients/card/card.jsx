import React, {useState} from 'react';
import styles from './card.module.css'
import CurrentPrice from "../../../current-price/current-price";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../../modal/modal";
import IngredientDetails from "../../../modals-inner/ingredient-details/ingredient-details";
import {DATA_PROP_TYPES} from "../../../../utils/consts";

const Card = ({data}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [ingredientId, setIngredientId] = useState([]);

    const toggleModal = (info) => {
        setIsOpen(!isOpen);
        setIngredientId(info)
    };

    return (
        <>
            <div className={styles.body}>
                {data.map(item =>
                    <div onClick={() => toggleModal(item._id)} key={item._id} className={styles.item}>
                        <img className={styles.image} src={item.image} alt={item.name}/>
                        <div className={styles.price}>
                            <CurrentPrice size={'default'} sum={item.price}/>
                        </div>
                        <div className={`${styles.name} text text_type_main-default`}>
                            {item.name}
                        </div>
                        <Counter count={0} size="default" extraClass="counter"/>
                    </div>
                )}
            </div>
            {isOpen ? (
                <Modal title="Детали ингредиента" onClose={() => setIsOpen(false)}>
                    <IngredientDetails data={data} ingredientId={ingredientId}/>
                </Modal>
            ) : null}
        </>
    );
};

Card.propTypes = {
    data: DATA_PROP_TYPES,
};

export default Card;