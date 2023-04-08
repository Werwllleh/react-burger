import React, {useState} from 'react';
import styles from "../logreg.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchUserData} from "../../services/stores/action-creators";

const Registration = () => {
    const dispatch = useDispatch();

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

    const formHandler = () => {
        if (valueName && valueEmail && valuePassword) {
            let userArr = {
                name: valueName,
                email: valueEmail,
                password: valuePassword
            }
            dispatch(fetchUserData(userArr))
        } else {
            alert('Введены не все данные!')
        }
    }

    return (
        <div className={styles.body}>
            <div className={`text text_type_main-medium ${styles.title}`}>Регистрация</div>
            <form onSubmit={formHandler}>
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
                    <Button htmlType="submit" type="primary" size="medium">
                        Зарегистрироваться
                    </Button>
                </div>
            </form>
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