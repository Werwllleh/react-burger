import PropTypes from "prop-types";

export const URL = 'https://norma.nomoreparties.space/api/'
export const BUN = 'bun'
export const SAUCE = 'sauce'
export const FILLINGS = 'main'
export const ESC_KEYCODE = 27;

export const ItemTypes = {
    CONSTRUCTOR_LIST: 'constructorList',
    CONSTRUCTOR_CONTAINER: 'constructorContainer'

}

export const DATA_PROP_TYPES = PropTypes.shape(
    {
        _id: PropTypes.string.isRequired,
        __v: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        proteins: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
    }
).isRequired;

export const apiRoutes = {
    GET_INGREDIENTS: 'ingredients',
    GET_ORDER_NUM: 'orders',
    USER_INFO: 'auth/user',
    REGISTER: 'auth/register',
    LOGIN: 'auth/login',
    LOGOUT: 'auth/logout',
    PASSWORD_RESET: 'password-reset',
    PASSWORD_CHANGE: 'password-reset/reset',
    TOKEN_REFRESH: 'auth/token',
}

export const route = {
    NF_404: '*',
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
    PROFILE: '/profile',
    MY_ORDERS: '/profile/orders',
    LOGOUT: '/logout',
    CURRENT_INGREDIENTS: '/ingredients/:ingredientId',
}