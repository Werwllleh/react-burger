import {apiRoutes, URL} from "./consts";

/**============API UNIQUE REQUESTS============**/

export const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const requestToApi = (endpoint, options) => {
  return fetch(URL + endpoint, options).then(checkResponse);
}


/**============FOR BURGER REQUESTS============**/

export const getProductData = async () => {
  return await requestToApi(apiRoutes.GET_INGREDIENTS)
}

export const getOrderNum = async (orderArr) => {
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
