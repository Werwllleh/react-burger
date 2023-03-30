import React from 'react';
import {Link, NavLink, useLocation} from "react-router-dom";
import styles from './left-bar.module.css';

const LeftBar = () => {

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
                <Link to={'/'} className={styles.link}>Выход</Link>
            </div>
            <div className={`${styles.note} text text_type_main-default text_color_inactive`}>
                {note}
            </div>
        </div>
    );
};

export default LeftBar;