import React from 'react';
import './App.css';
import AppHeader from "./components/app-header/app-header";
import PageConstructor from "./components/page-constructor/page-constructor";


function App() {


    return (
        <>
            <AppHeader/>
            <PageConstructor />
            {/*{isLoading ? <Loader/> : <PageConstructor />}*/}
            {/*{error ? <Error/> : null}
            {isLoading ? <Loader/> : <PageConstructor />}*/}
        </>
    );
}

export default App;
