import {getProductData} from "../../utils/burger-api";
import {ingredientsFetching, ingredientsFetchingSuccess, ingredientsFetchingError} from "./ingredients-data";


export const fetchIngredients = () => {
    return function (dispatch) {
        dispatch({
            type: ingredientsFetching()
        });
        getProductData().then(res => {
            if (res && res.success) {
                dispatch({
                    type: ingredientsFetchingSuccess(),
                    ingredients: res.data
                });
            } else {
                dispatch({
                    type: ingredientsFetchingError()
                });
            }
        });
    };
}