import React from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './tabs.module.css';
import {BUN, FILLINGS, SAUCE} from "../../../../utils/consts";


const Tabs = ({activeTab}) => {

    return (
        <div className={styles.body}>
            <Tab value={BUN} active={activeTab === BUN}>
                Булки
            </Tab>
            <Tab value={SAUCE} active={activeTab === SAUCE}>
                Соусы
            </Tab>
            <Tab value={FILLINGS} active={activeTab === FILLINGS}>
                Начинки
            </Tab>
        </div>
    );
};

export default Tabs;