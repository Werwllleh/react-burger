import React, {useState} from 'react';
import styles from "../logreg.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

const ResetPassword = () => {

    const [valuePassword, setValuePassword] = useState('')
    const [valueCode, setValueCode] = useState('')

    const onChangePassword = e => {
        setValuePassword(e.target.value)
    }

    const onChangeCode = e => {
        setValueCode(e.target.value)
    }

    return (
        <div className={styles.body}>
            <div className={`text text_type_main-medium ${styles.title}`}>Восстановление пароля</div>
            <div className={styles.inputs}>
                <div className={styles.input}>
                    <PasswordInput
                        onChange={onChangePassword}
                        value={valuePassword}
                        name={'password'}
                    />
                </div>
                <div className={styles.input}>
                    <Input
                        type={'text'}
                        placeholder={'Введите код из письма'}
                        onChange={onChangeCode}
                        value={valueCode}
                        name={'code'}
                    />
                </div>
            </div>
            <div className={styles.button}>
                <Button htmlType="button" type="primary" size="medium">
                    Сохранить
                </Button>
            </div>
            <div className={styles.notes}>
                <div className={`${styles.note} text text_type_main-default`}>
                    <p>Вспомнили пароль?</p>
                    <Link to={'/login'}>Войти</Link>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;