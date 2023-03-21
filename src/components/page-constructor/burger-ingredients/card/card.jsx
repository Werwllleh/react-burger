import React, {useState} from 'react';
import styles from './card.module.css'
import Modal from "../../../modal/modal";
import IngredientDetails from "../../../modals-inner/ingredient-details/ingredient-details";
import DraggableCard from "../draggable-card/draggable-card";

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
                   <DraggableCard id={item._id} key={item._id} info={item}/>
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

/*Card.propTypes = {
    data: DATA_PROP_TYPES,
};*/

export default Card;