import React from 'react';
import './App.css';
import AppHeader from "./components/app-header/app-header";
import PageConstructor from "./components/page-constructor/page-constructor";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./pages/not-found/not-found";
import Login from "./pages/page-login/login";
import Registration from "./pages/page-registration/registration";
import ForgotPassword from "./pages/page-forgot-password/forgot-password";
import ResetPassword from "./pages/page-reset-password/reset-password";
import Profile from "./pages/page-profile/profile";


function App() {


    return (
        <>
            <BrowserRouter>
                <AppHeader/>
                <Routes>
                    <Route index element={<PageConstructor/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/forgot-password" element={<ForgotPassword/>}/>
                    <Route path="/reset-password" element={<ResetPassword/>}/>
                    <Route path="/profile" element={<Profile/>}>
                        <Route path="/profile/orders" element={<Profile/>}/>
                        <Route path="/profile/orders/:id" element={<Profile/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
