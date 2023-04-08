import React, {useState} from 'react';
import styles from '../logreg.module.css'
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {fetchUserLogin} from "../../services/stores/action-creators";
import {useDispatch, useSelector} from "react-redux";


const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [valueEmail, setValueEmail] = useState('');
    const [valuePassword, setValuePassword] = useState('');

    const user = useSelector(state => state.userReducer.email)

    const onChangeEmail = e => {
        setValueEmail(e.target.value)
    }
    const onChangePassword = e => {
        setValuePassword(e.target.value)
    }

    const formHandler = (e) => {
        e.preventDefault();
        if (valueEmail && valuePassword) {
            let userArr = {
                email: valueEmail,
                password: valuePassword
            }
            dispatch(fetchUserLogin(userArr));
            setValueEmail('');
            setValuePassword('');
            if (user !== '' || user !== null) {
                navigate('/');
            }
        } else {
            alert('Введены не все данные!')
        }
    }

    return (
        <div className={styles.body}>
            <div className={`text text_type_main-medium ${styles.title}`}>Вход</div>
            <form onSubmit={formHandler}>
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
                    <Button htmlType="submit" type="primary" size="medium">
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