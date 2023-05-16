import React, {FormEvent, useEffect} from 'react';
import styles from "../logreg.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {fetchNewPassword} from "../../services/stores/action-creators";
import {useForm} from "../../utils/hooks/useForm";
import {useAppDispatch} from "../../utils/hooks/redux-hooks";


const ResetPassword = (): JSX.Element => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    interface IResetPassFormTypes {
        password: string;
        token: string;
    }

    const initialFormValues: IResetPassFormTypes = {
        password: "",
        token: ""
    };

    const {values, handleChange, setValues} = useForm(initialFormValues);

    useEffect(() => {
        if (localStorage.getItem('PasswordResetQuery') !== 'true') {
            navigate('/login');
        }
    }, [navigate]);


    const formHandler = (e: FormEvent) => {
        e.preventDefault();
        if (values.password && values.password.length > 3 && values.token && values.token.length > 30) {
            dispatch(fetchNewPassword(values));
            setValues({
                password: "",
                token: ""
            })
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
                            onChange={handleChange}
                            value={values.password}
                            name={'password'}
                        />
                    </div>
                    <div className={styles.input}>
                        <Input
                            type={'text'}
                            placeholder={'Введите код из письма'}
                            onChange={handleChange}
                            value={values.token}
                            name={'token'}
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