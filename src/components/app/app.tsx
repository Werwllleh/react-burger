import React, {useEffect} from 'react';
import AppHeader from "../app-header/app-header";
import PageConstructor from "../page-constructor/page-constructor";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import NotFound from "../../pages/not-found/not-found";
import Login from "../../pages/page-login/login";
import Registration from "../../pages/page-registration/registration";
import ForgotPassword from "../../pages/page-forgot-password/forgot-password";
import ResetPassword from "../../pages/page-reset-password/reset-password";
import Profile from "../../pages/page-profile/profile";
import {useDispatch} from "react-redux";
import Modal from "../modal/modal";
import IngredientDetails from "../modals-inner/ingredient-details/ingredient-details";
import {fetchIngredients} from "../../services/stores/action-creators";
import {OnlyAuth, OnlyUnAuth} from "../../pages/protected-route";
import {checkUserAuth} from "../../utils/auth-api";
import {route} from "../../utils/consts";
import {removeOrderData} from "../../services/stores/order";


function App() {

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const background = location.state && location.state.background;

    useEffect(() => {
        //@ts-ignore
        dispatch(fetchIngredients());
        dispatch(checkUserAuth());
    }, [dispatch]);

    const closeModal = () => {
        //@ts-ignore
        dispatch(removeOrderData())
        navigate(-1);
    }


    return (
        <>
            <AppHeader/>
            <Routes location={background || location}>
                <Route index element={<PageConstructor/>}/>
                <Route path={route.CURRENT_INGREDIENTS} element={<IngredientDetails/>}/>
                <Route path={route.LOGIN} element={<OnlyUnAuth component={<Login/>}/>}/>
                <Route path={route.REGISTER} element={<OnlyUnAuth component={<Registration/>}/>}/>
                <Route path={route.FORGOT_PASSWORD} element={<OnlyUnAuth component={<ForgotPassword/>}/>}/>
                <Route path={route.RESET_PASSWORD} element={<OnlyUnAuth component={<ResetPassword/>}/>}/>
                <Route path={route.PROFILE} element={<OnlyAuth component={<Profile/>}/>}>
                    <Route path={route.MY_ORDERS} element={<Profile/>}/>
                </Route>
                <Route path={route.NF_404} element={<NotFound/>}/>
            </Routes>

            {background && (
                <Routes>
                    <Route
                        path={route.CURRENT_INGREDIENTS}
                        element={
                            <Modal title="Детали ингредиента" onClose={closeModal}>
                                <IngredientDetails/>
                            </Modal>
                        }
                    />
                </Routes>
            )}
        </>
    );
}

export default App;
