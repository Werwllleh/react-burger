import React, {useEffect, useState} from 'react';
import './App.css';
import AppHeader from "./components/app-header/app-header";
import PageConstructor from "./components/page-constructor/page-constructor";
import {API} from "./utils/consts";
import Loader from "./components/loader/loader";
import Error from "./components/error/error";

function App() {

    const [productData, setProductData] = useState([]);
    const [error, setError] = useState({
        status: false,
        text: ''
    });


    useEffect(() => {
        const getProductData = async () => {
            await fetch(API)
                .then(res => res.json())
                .then(data => setProductData([...data.data]))
                .catch(e => {
                    setError({status: true, text: e});
                });
        };

        getProductData();
    }, [])


    return (
        <>
            <AppHeader/>
            {error.status ? <Error /> : null}
            {!error.status && productData.length >= 1 ? <PageConstructor fetchingData={productData}/> : <Loader/>}
        </>
    );
}

export default App;
