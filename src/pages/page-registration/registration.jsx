import React, {useState} from 'react';
import styles from "../logreg.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

const Registration = () => {

    const [valueName, setValueName] = useState('')
    const [valueEmail, setValueEmail] = useState('')
    const [valuePassword, setValuePassword] = useState('')

    const onChangeName = e => {
        setValueName(e.target.value)
    }

    const onChangeEmail = e => {
        setValueEmail(e.target.value)
    }
    const onChangePassword = e => {
        setValuePassword(e.target.value)
    }

    return (
        <div className={styles.body}>
            <div className={`text text_type_main-medium ${styles.title}`}>Регистрация</div>
            <div className={styles.inputs}>
                <div className={styles.input}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={onChangeName}
                        value={valueName}
                        name={'name'}
                    />
                </div>
                <div className={styles.input}>
                    <EmailInput
                        onChange={onChangeEmail}
                        value={valueEmail}
                        name={'email'}
                        isIcon={false}
                    />
                </div>
                <div className={styles.input}>
                    <PasswordInput
                        onChange={onChangePassword}
                        value={valuePassword}
                        name={'password'}
                    />
                </div>
            </div>
            <div className={styles.button}>
                <Button htmlType="button" type="primary" size="medium">
                    Зарегистрироваться
                </Button>
            </div>
            <div className={styles.notes}>
                <div className={`${styles.note} text text_type_main-default`}>
                    <p>Уже зарегистрированы?</p>
                    <Link to={'/login'}>Войти</Link>
                </div>
            </div>
        </div>
    );
};

export default Registration;