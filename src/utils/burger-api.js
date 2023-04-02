import {URL} from "./consts";

export const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getProductData = async () => {
    try {
        return (
            await fetch(URL + 'ingredients')
                .then(checkResponse)
        )
    } catch (err) {
        return console.log(err)
    }
};

export const getOrderNum = async (orderArr) => {
    try {
        return (
            await fetch(URL + 'orders', {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ingredients: orderArr
                })
            })
                .then(checkResponse)
        )
    } catch (err) {
        return console.log(err)
    }
};