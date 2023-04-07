import React, {useState} from 'react';
import styles from '../logreg.module.css'
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {fetchUserLogin} from "../../services/stores/actionCreators";
import {useDispatch} from "react-redux";


const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [valueEmail, setValueEmail] = useState('');
    const [valuePassword, setValuePassword] = useState('');

    const onChangeEmail = e => {
        setValueEmail(e.target.value)
    }
    const onChangePassword = e => {
        setValuePassword(e.target.value)
    }

    const onLogin = (e) => {
        e.preventDefault();
        if (valueEmail && valuePassword) {
            let userArr = {
                email: valueEmail,
                password: valuePassword
            }
            dispatch(fetchUserLogin(userArr));
            setValueEmail('');
            setValuePassword('');
            navigate('/');
        } else {
            alert('Введены не все данные!')
        }
    }

    return (
        <div className={styles.body}>
            <div className={`text text_type_main-medium ${styles.title}`}>Вход</div>
            <form>
                <div className={styles.inputs}>
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
                    <Button onClick={onLogin} htmlType="submit" type="primary" size="medium">
                        Войти
                    </Button>
                </div>
                <div className={styles.notes}>
                    <div className={`${styles.note} text text_type_main-default`}>
                        <p>Вы — новый пользователь?</p>
                        <Link to={'/register'}>Зарегистрироваться</Link>
                    </div>
                    <div className={`${styles.note} text text_type_main-default`}>
                        <p>Забыли пароль?</p>
                        <Link to={'/forgot-password'}>Восстановить пароль</Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;