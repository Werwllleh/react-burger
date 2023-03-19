import {URL} from "./consts";

const checkResponse = (res) => {
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