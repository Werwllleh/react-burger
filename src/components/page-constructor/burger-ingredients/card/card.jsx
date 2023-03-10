import React, {useState} from 'react';
import styles from './card.module.css'
import CurrentPrice from "../../../current-price/current-price";
import PropTypes from "prop-types";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../../modal/modal";
import IngredientDetails from "../../../modals-inner/ingredient-details/ingredient-details";

const Card = ({data}) => {

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

    Card.propTypes = {
        data: dataPropTypes.isRequired,
    };

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
                        {item.__v ? <Counter count={item.__v} size="default" extraClass="counter"/> : null}
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

export default Card;