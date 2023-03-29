import React from 'react';
import './App.css';
import AppHeader from "./components/app-header/app-header";
import PageConstructor from "./components/page-constructor/page-constructor";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./pages/not-found/not-found";


function App() {


    return (
        <>
            <BrowserRouter>
                <AppHeader/>
                <Routes>
                    <Route index element={<PageConstructor/>}/>
                    <Route path="/login" element={<PageConstructor/>}/>
                    <Route path="/login" element={<PageConstructor/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
