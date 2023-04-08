import React, {useState} from 'react';
import styles from "./profile-form.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {fetchUpdateUserData} from "../../../services/stores/action-creators";

const ProfileForm = () => {


    const dispatch = useDispatch();
    const {name, email} = useSelector(state => state.userReducer.userData);

    const [valueName, setValueName] = useState(name)
    const [valueEmail, setValueEmail] = useState(email)
    const [valuePassword, setValuePassword] = useState('')

    const onChangeName = e => {
        setValueName(e.target.value)
    }

    const onChangeEmail = e => {
        setValueEmail(e.target.value)
    }
    const onChangePassword = e => {
        setValuePassword(e.target.value)
    }

    const formHandler = (e) => {
        e.preventDefault();
        if (valueName !== name || valueEmail !== email || valuePassword !== '') {
            dispatch(fetchUpdateUserData({valueName, valueEmail, valuePassword}))
        }
    }

    return (
        <form onSubmit={formHandler}>
            <div className={styles.inputs}>
                <div className={styles.input}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={onChangeName}
                        value={valueName}
                        name={'name'}
                        icon="EditIcon"
                    />
                </div>
                <div className={styles.input}>
                    <EmailInput
                        onChange={onChangeEmail}
                        value={valueEmail}
                        name={'email'}
                        placeholder="Логин"
                        isIcon={true}
                    />
                </div>
                <div className={styles.input}>
                    <PasswordInput
                        onChange={onChangePassword}
                        value={valuePassword}
                        name={'password'}
                        icon="EditIcon"
                    />
                </div>
            </div>
            <div className={styles.button}>
                <Button htmlType="submit" type="primary" size="medium">
                    Сохранить
                </Button>
            </div>
        </form>
    );
};

export default ProfileForm;