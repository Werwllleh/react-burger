import React, {useState} from 'react';
import styles from "../logreg.module.css";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

const ForgotPassword = () => {

    const [valueEmail, setValueEmail] = useState('')

    const onChangeEmail = e => {
        setValueEmail(e.target.value)
    }

    return (
        <div className={styles.body}>
            <div className={`text text_type_main-medium ${styles.title}`}>Восстановление пароля</div>
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
                <Button htmlType="button" type="primary" size="medium">
                    Восстановить
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

export default ForgotPassword;