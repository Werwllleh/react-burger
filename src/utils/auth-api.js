import {URL} from "./consts";
import {checkResponse} from "./burger-api";

export const getRegisterData = async (userData) => {
    try {
        return (
            await fetch(URL + 'auth/register', {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: userData.email,
                    password: userData.password,
                    name: userData.name
                })
            })
                .then(checkResponse)
                /*.then(() => {
                    localStorage.setItem("accessToken", accessToken);
                    localStorage.setItem("refreshToken", "test-refresh-token")
                })*/

        )
    } catch (err) {
        return console.log(err)
    }
};