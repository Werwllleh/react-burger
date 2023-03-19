import React, {useState} from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './tabs.module.css';
import {BUN, FILLINGS, SAUCE} from "../../../../utils/consts";


const Tabs = () => {
    const [current, setCurrent] = useState(BUN)
    return (
        <div className={styles.body}>
            <Tab value={BUN} active={current === BUN} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value={SAUCE} active={current === SAUCE} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value={FILLINGS} active={current === FILLINGS} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    );
};

export default Tabs;