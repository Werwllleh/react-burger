import React from 'react';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css';
import {NavLink} from "react-router-dom";

const AppHeader = (): JSX.Element => {

    return (
        <header>
            <div className={styles.body}>
                <nav>
                    <NavLink to={'/'} className={styles.link}>
                        {({isActive}) => (
                            <>
                                <div className={styles.icon}><BurgerIcon type={isActive ? 'primary' : 'secondary'}/>
                                </div>
                                <div
                                    className={`text text_type_main-default + ${isActive ? styles.active : styles.text}`}>Конструктор
                                </div>
                            </>
                        )}
                    </NavLink>
                    <NavLink to={'/lenta'} className={styles.link}>
                        {({isActive}) => (
                            <>
                                <div className={styles.icon}><ListIcon type={isActive ? 'primary' : 'secondary'}/></div>
                                <div
                                    className={`text text_type_main-default + ${isActive ? styles.active : styles.text}`}>
                                    Лента заказов
                                </div>
                            </>
                        )}
                    </NavLink>
                </nav>
                <Logo/>
                <div className={styles.personal}>
                    <NavLink to={'/profile'} className={styles.link}>
                        {({isActive}) => (
                            <>
                                <div className={styles.icon}><ProfileIcon type={isActive ? 'primary' : 'secondary'}/>
                                </div>
                                <div
                                    className={`text text_type_main-default + ${isActive ? styles.active : styles.text}`}>
                                    Личный кабинет
                                </div>
                            </>
                        )}
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default AppHeader;