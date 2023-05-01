import React, {ReactNode, useEffect} from 'react';
import styles from './modal.module.css';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {createPortal} from "react-dom";
import ModalOverlay from "./modal-overlay/modal-overlay";
import {ESC_KEYCODE} from "../../utils/consts";

const modal = document.getElementById("react-modals");

interface ModalProps {
    onClose: () => void;
    title?: string;
    children: ReactNode;
}

const Modal = ({onClose, title, children}: ModalProps): JSX.Element => {

    useEffect(() => {
        const onKeydown = (e: KeyboardEvent) => {
            if (e.keyCode === ESC_KEYCODE) {
                onClose()
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
        modal!
    );
};

export default Modal;