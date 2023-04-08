import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import styles from './left-bar.module.css';
import {fetchLogOut} from "../../services/stores/action-creators";
import {useDispatch} from "react-redux";
import {clearConstructorIngredients} from "../../services/stores/constructor-ingredients";

const LeftBar = () => {

    const dispatch = useDispatch();
    const currentLink = useLocation();

    let note;
    switch (currentLink.pathname) {
        case '/profile':
            note = 'В этом разделе вы можете изменить свои персональные данные';
            break
        case '/profile/orders':
            note = 'В этом разделе вы можете просмотреть свою историю заказов';
            break
        default:
            note = null
            break
    }

    const logOut = (e) => {
        e.preventDefault();
        dispatch(fetchLogOut());
        dispatch(clearConstructorIngredients());
    }

    return (
        <div className={styles.body}>
            <div className={`${styles.menu} text text_type_main-medium`}>
                <NavLink to={'/profile'} className={({isActive}) =>
                    isActive ? styles.link + ' ' + styles.active : styles.link
                } end>
                    Профиль
                </NavLink>
                <NavLink to={'/profile/orders'} className={({isActive}) =>
                    isActive ? styles.link + ' ' + styles.active : styles.link
                } end>
                    История заказов
                </NavLink>
                <button onClick={logOut} className={`${styles.btn} text text_type_main-medium`}>Выход</button>
            </div>
            <div className={`${styles.note} text text_type_main-default text_color_inactive`}>
                {note}
            </div>
        </div>
    );
};

export default LeftBar;