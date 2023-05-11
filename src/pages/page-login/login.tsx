import React, {FormEvent} from 'react';
import styles from '../logreg.module.css'
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {fetchUserLogin} from "../../services/stores/action-creators";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "../../utils/hooks/useForm";
import {useAppSelector} from "../../utils/hooks/redux-hooks";


const Login = (): JSX.Element => {

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const initialFormValues = {
        email: "",
        password: ""
    };

    const {values, handleChange, setValues} = useForm(initialFormValues);

    const user = useAppSelector(state => state.userInfo.userData.email)

    const formHandler = (e:FormEvent) => {
        e.preventDefault();
        if (values.email && values.password) {
            //@ts-ignore
            dispatch(fetchUserLogin(values));
            setValues({
                email: "",
                password: ""
            });
            if (user !== '' || user !== null) {
                navigate(location.state.from?.pathname);
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