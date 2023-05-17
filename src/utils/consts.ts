export const URL = 'https://norma.nomoreparties.space/api/'
export const BUN = 'bun'
export const SAUCE = 'sauce'
export const FILLINGS = 'main'
export const ESC_KEYCODE = 27;

export const ItemTypes = {
    CONSTRUCTOR_LIST: 'constructorList',
    CONSTRUCTOR_CONTAINER: 'constructorContainer'
}

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
    MY_ORDER_ID: '/profile/orders/:orderId',
    FEED: '/feed',
    CURRENT_ORDER: '/feed/:feedId',
    LOGOUT: '/logout',
    CURRENT_INGREDIENTS: '/ingredients/:ingredientId',
}

export const ws_routes = {
    GET_GENERAL_ORDERS: 'wss://norma.nomoreparties.space/orders/all',
}

