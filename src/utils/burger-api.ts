import {apiRoutes, URL} from "./consts";
import {IOrderSuccessFields, IResponseError, TIngredientsFetch} from "./types/types";

/**============API UNIQUE REQUESTS============**/

export const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() as Promise<T> : res.json().then((err: IResponseError) => Promise.reject(err));
};

export const requestToApi = <T>(endpoint: string, options?: RequestInit): Promise<T> => {
  return fetch(URL + endpoint, options).then(checkResponse<T>);
}


/**============FOR BURGER REQUESTS============**/

export const getProductData = async ():Promise<TIngredientsFetch> => {
  return await requestToApi(apiRoutes.GET_INGREDIENTS)
}

export const getOrderNum = async (orderArr: string[]) => {
  return (
    await requestToApi<IOrderSuccessFields>(apiRoutes.GET_ORDER_NUM, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ingredients: orderArr
      })
    })
  )
}
