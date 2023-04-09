import React from 'react';
import styles from "../logreg.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchUserData} from "../../services/stores/action-creators";
import {useForm} from "../../utils/hooks/useForm";

const Registration = () => {
    const dispatch = useDispatch();

    const initialFormValues = {
        name: "",
        email: "",
        password: ""
    };

    const {values, handleChange, setValues} = useForm(initialFormValues);

    const formHandler = () => {
        if (values.name.length >= 2 && values.email.length >= 2 && values.password.length >= 8) {
            dispatch(fetchUserData(values))
            setValues({
                name: "",
                email: "",
                password: ""
            });
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
                            onChange={handleChange}
                            value={values.name}
                            name={'name'}
                        />
                    </div>
                    <div className={styles.input}>
                        <EmailInput
                            onChange={handleChange}
                            value={values.email}
                            name={'email'}
                            isIcon={false}
                        />
                    </div>
                    <div className={styles.input}>
                        <PasswordInput
                            onChange={handleChange}
                            value={values.password}
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