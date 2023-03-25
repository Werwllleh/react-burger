import React, {useEffect} from 'react';
import styles from './modal.module.css';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {createPortal} from "react-dom";
import ModalOverlay from "./modal-overlay/modal-overlay";
import PropTypes from "prop-types";
import {ESC_KEYCODE} from "../../utils/consts";
import {useDispatch} from "react-redux";
import {removeIngredientData} from "../../services/stores/ingredient-specifications";
import {removeOrderData} from "../../services/stores/order";

const modal = document.getElementById("react-modals");

const Modal = ({onClose, title, children}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        const onKeydown = (e) => {
            if (e.keyCode === ESC_KEYCODE) {
                onClose()
                dispatch(removeIngredientData())
                dispatch(removeOrderData())
            }
        }
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })

    return createPortal(
        <>
            <div className={styles.body}>
                <div className={styles.body_inner}>
                    <div className={styles.header}>
                        <div className={`${styles.title_text} text text_type_main-large`}>
                            {title ? title : null}
                        </div>
                        <button onClick={onClose} className={styles.closeBtn}>
                            <CloseIcon type="primary"/>
                        </button>
                    </div>
                    {children}
                </div>
            </div>
            <ModalOverlay onClose={onClose}/>
        </>,
        modal
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.element
};

export default Modal;