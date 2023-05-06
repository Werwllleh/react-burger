import React from 'react';
import styles from './profile.module.css';
import LeftBar from "../../components/left-bar/left-bar";
import {useLocation} from "react-router-dom";
import ProfileForm from "./profile-form/profile-form";
import ProfileOrders from "./profile-orders/profile-orders";
import {route} from "../../utils/consts";


const Profile = (): JSX.Element => {

    const {pathname} = useLocation()

    return (
        <div className='container'>
            <div className={styles.body}>
                <LeftBar/>
                <div className={styles.content}>
                    {pathname === route.PROFILE ? <ProfileForm/> : <ProfileOrders/>}
                </div>
            </div>
        </div>
    );
};

export default Profile;