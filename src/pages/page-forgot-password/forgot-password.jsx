import React, {useState} from 'react';
import styles from "../logreg.module.css";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchResetPassword} from "../../services/stores/action-creators";


const ForgotPassword = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [valueEmail, setValueEmail] = useState('')

    const onChangeEmail = e => {
        setValueEmail(e.target.value)
    }

    const formHandler = (e) => {
        e.preventDefault();
        if (valueEmail.length > 3) {
            dispatch(fetchResetPassword(valueEmail));
            location.state = 'from forgot-password page';
            setValueEmail('');
            navigate('/reset-password');
        }
    }

    return (
        <div className={styles.body}>
            <div className={`text text_type_main-medium ${styles.title}`}>Восстановление пароля</div>
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
                </div>
                <div className={styles.button}>
                    <Button htmlType="submit" type="primary" size="medium">
                        Восстановить
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

export default ForgotPassword;