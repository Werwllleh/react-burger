import React, {FormEvent} from 'react';
import styles from "../logreg.module.css";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {fetchResetPassword} from "../../services/stores/action-creators";
import {useForm} from "../../utils/hooks/useForm";
import {useAppDispatch} from "../../utils/hooks/redux-hooks";


const ForgotPassword = (): JSX.Element => {

    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const initialFormValues: {email: string} = {
        email: ""
    };

    const {values, handleChange, setValues} = useForm(initialFormValues);

    const formHandler = (e:FormEvent) => {
        e.preventDefault();
        if (values.email && values.email.length > 3) {
            dispatch(fetchResetPassword(values.email));
            location.state = 'from forgot-password page';
            setValues({
                email: ""
            });
            navigate('/reset-password');
        }
    };

    return (
        <div className={styles.body}>
            <div className={`text text_type_main-medium ${styles.title}`}>Восстановление пароля</div>
            <form onSubmit={formHandler}>
                <div className={styles.inputs}>
                    <div className={styles.input}>
                        <EmailInput
                            onChange={handleChange}
                            value={values.email}
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