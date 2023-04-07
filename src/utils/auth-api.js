import {apiRoutes, URL} from "./consts";
import {checkResponse} from "./burger-api";
import {getUserInfo} from "../services/stores/actionCreators";
import {setAuthChecked} from "../services/stores/user-data";

export const getRegisterData = async (userData) => {
    try {
        return (
            await fetch(URL + apiRoutes.REGISTER, {
                method: "POST",
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
                .then(data => {
                    localStorage.setItem('accessToken', data.accessToken);
                    localStorage.setItem('refreshToken', data.refreshToken);
                    return data
                })
        )
    } catch (err) {
        return console.log(err)
    }
};

export const getUserLogin = async (userData) => {
    try {
        return (
            await fetch(URL + apiRoutes.LOGIN, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: userData.email,
                    password: userData.password,
                })
            })
                .then(checkResponse)
                .then(data => {
                    localStorage.setItem('accessToken', data.accessToken);
                    localStorage.setItem('refreshToken', data.refreshToken);
                    return data
                })
        )
    } catch (err) {
        return console.log(err)
    }
};

export const resetUserPassword = async (email) => {
    try {
        return (
            await fetch(URL + apiRoutes.PASSWORD_RESET, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                })
            })
                .then(checkResponse)
        )
    } catch (err) {
        return console.log(err)
    }
}

export const sendNewPassword = async (password, token) => {
    try {
        return (
            await fetch(URL + apiRoutes.PASSWORD_CHANGE, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password: password,
                    token: token
                })
            })
                .then(checkResponse)
        )
    } catch (err) {
        return console.log(err)
    }
}

export const userLogoutSystem = async () => {
    try {
        return (
            await fetch(URL + apiRoutes.LOGOUT, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: localStorage.getItem('refreshToken')
                })
            })
                .then(checkResponse)
                .then((res) => {
                    if (res && res.success) {
                        localStorage.removeItem('accessToken')
                        localStorage.removeItem('refreshToken')
                    }
                })
        )
    } catch (err) {
        return console.log(err)
    }
}

export const userUpdateSystem = async (valueName, valueEmail, valuePassword) => {
    try {
        return (
            await fetch(URL + apiRoutes.USER_DATA, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    authorization: localStorage.getItem("accessToken"),
                },
                body: JSON.stringify({
                    email: valueEmail.email,
                    password: valuePassword.password,
                    name: valueName.name
                }),
            })
                .then(checkResponse)
        )
    } catch (err) {
        return console.log(err)
    }
}

export const refreshToken = () => {
    return fetch(URL + apiRoutes.TOKEN_REFRESH, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken"),
        }),
    }).then(checkResponse);
};


export const fetchWithRefresh = async (url, options) => {
    try {
        const res = await fetch(url, options);
        return await checkResponse(res);
    } catch (err) {
        if (err.message === "jwt expired") {
            const refreshData = await refreshToken(); //обновляем токен
            if (!refreshData.success) {
                return Promise.reject(refreshData);
            }
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            localStorage.setItem("accessToken", refreshData.accessToken);
            options.headers.authorization = refreshData.accessToken;
            const res = await fetch(url, options); //повторяем запрос
            return await checkResponse(res);
        } else {
            return Promise.reject(err);
        }
    }
};

export const checkUserAuth = () => {
    return (dispatch) => {
        if (localStorage.getItem("accessToken")) {
            dispatch(getUserInfo())
                .catch(error => {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                })
                .finally(() => dispatch(setAuthChecked(true)));
        } else {
            dispatch(setAuthChecked(true));
        }
    };
};