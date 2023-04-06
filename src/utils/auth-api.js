import {URL} from "./consts";
import {checkResponse} from "./burger-api";


/*export const changeAuthChecked = () => {
    return (dispatch) => {
        if (localStorage.getItem("accessToken")) {
            dispatch(getUser())
                .catch(() => {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    dispatch(setUser(null));
                })
                .finally(() => dispatch(isAuthChecked(true)));
        } else {
            dispatch(isAuthChecked(true));
        }
    };
};*/

/*export const getUser = async () => {
    try {
        return (
            await fetch(URL + 'auth/user', {
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
                .then(data => {
                    localStorage.setItem('accessToken', data.accessToken);
                    localStorage.setItem('refreshToken', data.refreshToken);
                    return data
                })
        )
    } catch (err) {
        return console.log(err)
    }
}*/

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
            await fetch(URL + 'auth/login', {
                method: "post",
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
            await fetch(URL + 'password-reset', {
                method: "post",
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
            await fetch(URL + 'password-reset/reset', {
                method: "post",
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
            await fetch(URL + 'auth/logout', {
                method: "post",
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

export const refreshToken = () => {
    return fetch(URL + 'auth/token', {
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