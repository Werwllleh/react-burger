import {apiRoutes} from "./consts";
import {requestToApi} from "./burger-api";
import {getUserInfo} from "../services/stores/action-creators";
import {setAuthChecked} from "../services/stores/user-data";
import {IFormValuesDefault, RefreshData} from "./types/types";
import {RequestOptions} from "http";

type TFormEmailPass = Omit<IFormValuesDefault, "name">;
type TFormEmail = Omit<IFormValuesDefault, "name, password">;
type TFormPasswordToken = {
    password: string;
    token: string;
};
export const getRegisterData = async (values: IFormValuesDefault) => {
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
        }).then((data) => {
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            return data
        })
    )
}
export const getUserLogin = async (userData: TFormEmailPass) => {
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
export const resetUserPassword = async (email: TFormEmail) => {
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
export const sendNewPassword = async (values: TFormPasswordToken) => {
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
export const userUpdateSystem = async (values: IFormValuesDefault) => {
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
export const fetchWithRefresh = async (url: string, options: RequestOptions & { headers: { authorization: string } }): Promise<Response> => {
    try {
        return await requestToApi(url, options);
    } catch (err: any) {
        if (err.message === "jwt expired") {
            const refreshData: RefreshData = await refreshToken();
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
    return (dispatch: any):void => {
        if (localStorage.getItem("accessToken") && localStorage.getItem("accessToken") !== "undefined") {
            dispatch(getUserInfo())
                .catch((error: any) => {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                })
                .finally(() => dispatch(setAuthChecked(true)));
        } else {
            dispatch(setAuthChecked(true));
        }
    };
};