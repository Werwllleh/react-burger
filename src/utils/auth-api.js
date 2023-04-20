import {apiRoutes} from "./consts";
import {requestToApi} from "./burger-api";
import {getUserInfo} from "../services/stores/action-creators";
import {setAuthChecked} from "../services/stores/user-data";


export const getRegisterData = async (values) => {
    return (
        await requestToApi(apiRoutes.REGISTER, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: values.email,
                password: values.password,
                name: values.name
            })
        }).then(data => {
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            return data
        })
    )
}

export const getUserLogin = async (userData) => {
    return (
        await requestToApi(apiRoutes.LOGIN, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: userData.email,
                password: userData.password,
            })
        }).then(data => {
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            return data
        })
    )
}

export const resetUserPassword = async (email) => {
    return (
        await requestToApi(apiRoutes.PASSWORD_RESET, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
            })
        }).then(data => localStorage.setItem('PasswordResetQuery', 'true'))
    )
}

export const sendNewPassword = async (values) => {
    return (
        await requestToApi(apiRoutes.PASSWORD_CHANGE, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                password: values.password,
                token: values.token
            })
        }).then(data => localStorage.removeItem('PasswordResetQuery'))
    )
}

export const userLogoutSystem = async () => {
    return (
        await requestToApi(apiRoutes.LOGOUT, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: localStorage.getItem('refreshToken')
            })
        }).then((res) => {
            if (res && res.success) {
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
            }
        })
    )
}

export const userUpdateSystem = async (values) => {
    return (
        await requestToApi(apiRoutes.USER_INFO, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                authorization: localStorage.getItem("accessToken"),
            },
            body: JSON.stringify({
                email: values.email,
                password: values.password,
                name: values.name
            }),
        })
    )
}

export const refreshToken = () => {
    return (
        requestToApi(apiRoutes.TOKEN_REFRESH, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                token: localStorage.getItem("refreshToken"),
            }),
        })
    )
};

export const fetchWithRefresh = async (url, options) => {
    try {
        return await requestToApi(url, options);
    } catch (err) {
        if (err.message === "jwt expired") {
            const refreshData = await refreshToken();
            if (!refreshData.success) {
                return Promise.reject(refreshData);
            }
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            localStorage.setItem("accessToken", refreshData.accessToken);
            options.headers.authorization = refreshData.accessToken;
            return await requestToApi(url, options);
        } else {
            return Promise.reject(err);
        }
    }
};

export const checkUserAuth = () => {
    return (dispatch) => {
        if (localStorage.getItem("accessToken") && localStorage.getItem("accessToken") !== "undefined") {
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