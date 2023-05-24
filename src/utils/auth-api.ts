import {apiRoutes} from "./consts";
import {requestToApi} from "./burger-api";
import {getUserInfo} from "../services/stores/action-creators";
import {setAuthChecked} from "../services/stores/user-data";
import {
    IFormValuesDefault,
    IResponseMessage,
    IResponseSuccess,
    ITokensResponse,
    IUserDataPayload,
    TFormPasswordToken
} from "./types/types";
import {AppDispatch} from "../services/store";

type TFormEmailPass = Omit<IFormValuesDefault, "name">;

export const getRegisterData = async (values: IFormValuesDefault) => {
    return (
        await requestToApi<IUserDataPayload & ITokensResponse>(apiRoutes.REGISTER, {
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
        await requestToApi<IUserDataPayload & ITokensResponse>(apiRoutes.LOGIN, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: userData.email,
                password: userData.password,
            })
        }).then((data) => {
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            return data
        })
    )
}
export const resetUserPassword = async (email: string) => {
    return (
        await requestToApi<IResponseSuccess & IResponseMessage>(apiRoutes.PASSWORD_RESET, {
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
        await requestToApi<IResponseSuccess & IResponseMessage>(apiRoutes.PASSWORD_CHANGE, {
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
        await requestToApi<IResponseSuccess & IResponseMessage>(apiRoutes.LOGOUT, {
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
        await requestToApi<IUserDataPayload>(apiRoutes.USER_INFO, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                authorization: localStorage.getItem("accessToken") ?? '',
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
        requestToApi<IUserDataPayload & ITokensResponse>(apiRoutes.TOKEN_REFRESH, {
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
export const fetchWithRefresh = async (url: string, options: RequestInit) => {
    try {
        return await requestToApi(url, options);
    } catch (err: unknown) {
        if ((err as Error).message === "jwt expired") {
            const refreshData = await refreshToken();
            if (!refreshData.success) {
                return Promise.reject(refreshData);
            }
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            localStorage.setItem("accessToken", refreshData.accessToken);
            const headers = new Headers(options.headers);
            headers.set("authorization", refreshData.accessToken);
            return await requestToApi(url, {...options, headers});
        } else {
            return Promise.reject(err);
        }
    }
};

export const checkUserAuth = () => {
    return (dispatch: AppDispatch) => {
        if (localStorage.getItem("accessToken") && localStorage.getItem("accessToken") !== "undefined") {
            dispatch(getUserInfo())
                .catch((error: Error) => {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                })
                .finally(() => dispatch(setAuthChecked(true)));
        } else {
            dispatch(setAuthChecked(true));
        }
    };
};