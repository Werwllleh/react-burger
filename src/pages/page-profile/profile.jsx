import React, {useState} from 'react';
import styles from './profile.module.css';
import LeftBar from "../../components/left-bar/left-bar";
import {EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";

const Profile = () => {

    const [value, setValue] = useState('bob@example.com')
    const onChange = e => {
        setValue(e.target.value)
    }

    return (
        <div className='container'>
            <div className={styles.body}>
                <LeftBar/>
                <div className={styles.inputs}>
                    <div className={styles.input}>
                        <EmailInput
                            onChange={onChange}
                            value={value}
                            name={'email'}
                            placeholder="Логин"
                            isIcon={true}
                            extraClass="mb-2"
                        />
                    </div>
                    <div className={styles.input}>
                        <EmailInput
                            onChange={onChange}
                            value={value}
                            name={'email'}
                            placeholder="Логин"
                            isIcon={true}
                            extraClass="mb-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;