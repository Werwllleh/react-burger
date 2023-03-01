import React from 'react';
import {DragIcon, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import data from '../../../../utils/data';
import styles from './my-constructor-element.module.css';

const MyConstructorElement = () => {
    const additions = data.filter(addition => addition.type !== "bun");

    return (
        <div className={'mt-25'} style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <ConstructorElement
                type="top"
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
            <div className={styles.list} style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {additions.map((el) => {
                return (
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            <DragIcon type="primary" />
                        </div>
                        <ConstructorElement
                            text={el.name}
                            price={el.price}
                            thumbnail={el.image}
                        />
                    </div>
                   )
            })}
            </div>
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text="Краторная булка N-200i (низ)"
                price={200}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
        </div>
    );
};

export default MyConstructorElement;