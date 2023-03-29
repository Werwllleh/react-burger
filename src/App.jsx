import React from 'react';
import './App.css';
import AppHeader from "./components/app-header/app-header";
import PageConstructor from "./components/page-constructor/page-constructor";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";


function App() {


    return (
        <>
            <BrowserRouter>
                <AppHeader/>
                <Routes>
                    <Route index element={<PageConstructor/>}/>
                    <Route path="/login" element={<PageConstructor/>}/>
                    <Route path="/login" element={<PageConstructor/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
