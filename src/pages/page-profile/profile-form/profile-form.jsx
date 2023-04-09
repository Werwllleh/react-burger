import React, {useEffect, useState} from 'react';
import styles from "./profile-form.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {fetchUpdateUserData} from "../../../services/stores/action-creators";
import {useForm} from "../../../utils/hooks/useForm";

const ProfileForm = () => {

    const dispatch = useDispatch();
    const [formChange, setFormChange] = useState(false)
    const {name, email} = useSelector(state => state.userReducer.userData);

    const initialFormValues = {
        name: name,
        email: email,
        password: ""
    };

    const {values, handleChange, setValues} = useForm(initialFormValues);

    useEffect(() => {
        if (values.name !== name || values.email !== email || (values.password !== '' && values.password.length  >= 8)) {
            setFormChange(true);
        } else {
            setFormChange(false);
        }
    }, [values, name, email])

    const formHandler = (e) => {
        e.preventDefault();
        if (formChange === true) {
            dispatch(fetchUpdateUserData(values));
            setFormChange(false);
        }
    }

    const clearForm = () => {
        setValues({
            name: name,
            email: email,
            password: ""
        });
    }

    return (
        <form onSubmit={formHandler}>
            <div className={styles.inputs}>
                <div className={styles.input}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={handleChange}
                        value={values.name}
                        name={'name'}
                        icon="EditIcon"
                    />
                </div>
                <div className={styles.input}>
                    <EmailInput
                        onChange={handleChange}
                        value={values.email}
                        name={'email'}
                        placeholder="Логин"
                        isIcon={true}
                    />
                </div>
                <div className={styles.input}>
                    <PasswordInput
                        onChange={handleChange}
                        value={values.password}
                        name={'password'}
                        icon="EditIcon"
                    />
                </div>
            </div>
            {formChange ? (
                <div className={styles.buttons}>
                    <button className={`${styles.resetBtn} text text_type_main-default`} onClick={clearForm} >Отмена</button>
                    <Button htmlType="submit" type="primary" size="medium">
                        Сохранить
                    </Button>
                </div>
            ) : null}
        </form>
    );
};

export default ProfileForm;