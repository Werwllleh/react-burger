import {apiRoutes, URL} from "./consts";
import {ResponseError} from "./types/types";

/**============API UNIQUE REQUESTS============**/

export const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() as Promise<T> : res.json().then((err: ResponseError) => Promise.reject(err));
};

export const requestToApi = (endpoint: string, options) => {
  return fetch(URL + endpoint, options).then(checkResponse);
}


/**============FOR BURGER REQUESTS============**/

export const getProductData = async () => {
  return await requestToApi(apiRoutes.GET_INGREDIENTS)
}

export const getOrderNum = async (orderArr: string[]) => {
  return (
    await requestToApi(apiRoutes.GET_ORDER_NUM, {
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
