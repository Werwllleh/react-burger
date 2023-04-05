import React, {useEffect} from 'react';
import './App.css';
import AppHeader from "./components/app-header/app-header";
import PageConstructor from "./components/page-constructor/page-constructor";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import NotFound from "./pages/not-found/not-found";
import Login from "./pages/page-login/login";
import Registration from "./pages/page-registration/registration";
import ForgotPassword from "./pages/page-forgot-password/forgot-password";
import ResetPassword from "./pages/page-reset-password/reset-password";
import Profile from "./pages/page-profile/profile";
import {useDispatch} from "react-redux";
import Modal from "./components/modal/modal";
import IngredientDetails from "./components/modals-inner/ingredient-details/ingredient-details";
import {fetchIngredients} from "./services/stores/actionCreators";
import {OnlyAuth, OnlyUnAuth} from "./pages/protected-route";
import * as PropTypes from "prop-types";


function App() {

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const background = location.state && location.state.background;

    useEffect(() => {
        dispatch(fetchIngredients())
    }, [dispatch]);

    const closeModal = () => {
        navigate(-1);
    }

    /*useEffect(() => {
        dispatch(checkUserAuth());
    }, []);*/

    return (
        <>
            <AppHeader/>
            <Routes location={background || location}>
                <Route index element={<PageConstructor/>}/>
                <Route path='/ingredients/:ingredientId' element={<IngredientDetails/>}/>
                <Route path="/login" element={<OnlyUnAuth component={Login}/>}/>
                <Route path="/register" element={<OnlyUnAuth component={Registration}/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
                <Route path="/profile" element={<OnlyAuth component={Profile}/>}>
                    <Route path="/profile/orders" element={<Profile/>}/>
                    <Route path="/profile/orders/:id" element={<Profile/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>

            {background && (
                <Routes>
                    <Route
                        path='/ingredients/:ingredientId'
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
