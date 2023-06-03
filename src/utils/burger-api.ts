import {apiRoutes, URL} from "./consts";
import {IOrderDetail, IOrderSuccessFields, TIngredientsFetch} from "./types/types";

/**============API UNIQUE REQUESTS============**/

export const checkResponse = <T>(res: Response): Promise<T> => {
    return res.ok ? res.json() as Promise<T> : Promise.reject(`Ошибка ${res.status}`);
};

export const requestToApi = <T>(endpoint: string, options?: RequestInit): Promise<T> => {
    return fetch(URL + endpoint, options).then(checkResponse<T>)
}


/**============FOR BURGER REQUESTS============**/

export const getProductData = async (): Promise<TIngredientsFetch> => {
    return await requestToApi(apiRoutes.GET_INGREDIENTS)
}

export const getOrderNum = async (orderArr: string[]) => {
    return (
        await requestToApi<IOrderSuccessFields>(apiRoutes.GET_ORDER_NUM, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                authorization: localStorage.getItem("accessToken") ?? '',
            },
            body: JSON.stringify({
                ingredients: orderArr
            })
        })
    )
}

export const getOrderDetailData = async (orderNum: string) => {
    return (
        await requestToApi<IOrderDetail>(apiRoutes.GET_ORDER_NUM + `/${orderNum}`, {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    )
}
