import {URL} from "./consts";
import {checkResponse} from "./burger-api";

export const resetPassword = async (email) => {
    try {
        return (
            await fetch(URL + 'password-reset', {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email
                })
            })
                .then(checkResponse)
        )
    } catch (err) {
        return console.log(err)
    }
};