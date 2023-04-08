import React, {useEffect, useState} from 'react';
import styles from "../logreg.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchNewPassword} from "../../services/stores/action-creators";

const ResetPassword = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [valuePassword, setValuePassword] = useState('');
    const [valueCode, setValueCode] = useState('');

    useEffect(() => {
        if (!localStorage.getItem('PasswordResetQuery') && localStorage.getItem('PasswordResetQuery') !== true) {
            navigate('/login')
        }
    }, [navigate])

    const onChangePassword = e => {
        setValuePassword(e.target.value);
    }

    const onChangeCode = e => {
        setValueCode(e.target.value);
    }

    const formHandler = (e) => {
        e.preventDefault();
        if (valuePassword.length > 3 && valueCode.length > 30) {
            dispatch(fetchNewPassword({valuePassword, valueCode}));
            setValuePassword('');
            setValueCode('');
            navigate('/login');
        }
    }

    return (
        <div className={styles.body}>
            <div className={`text text_type_main-medium ${styles.title}`}>Восстановление пароля</div>
            <form onSubmit={formHandler}>
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
                    <Button htmlType="submit" type="primary" size="medium">
                        Сохранить
                    </Button>
                </div>
            </form>
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