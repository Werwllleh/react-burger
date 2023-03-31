import React, {useState} from 'react';
import styles from './profile.module.css';
import LeftBar from "../../components/left-bar/left-bar";
import {EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";

const Profile = () => {

    const [valueName, setValueName] = useState('')
    const [valueEmail, setValueEmail] = useState('')
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

    return (
        <div className='container'>
            <div className={styles.body}>
                <LeftBar/>
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
            </div>
        </div>
    );
};

export default Profile;