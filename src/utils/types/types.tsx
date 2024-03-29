export type TIngredientsFetch = { data: IIngredient[] } & IResponseSuccess;
export interface IIngredient {
    _id: string,
    __v: number,
    type: string,
    proteins: number,
    price: number,
    name: string,
    image_mobile: string,
    image_large: string,
    image: string,
    fat: number,
    carbohydrates: number,
    calories: number,
}
export interface IConstructorIngredient extends IIngredient{
    key: string;
}
export interface IFormValuesDefault {
    name: string | null;
    email: string | null;
    password: string | null;
}

export interface ITokensResponse {
    accessToken: string;
    refreshToken: string;
}

export interface IResponseError {
    error: string;
}

export interface IResponseSuccess {
    success: boolean;
}
export interface IResponseMessage {
    message: string;
}

export interface IOrderSuccessFields {
    success: boolean;
    name: string;
    order: {
        number: number;
    };
}

export interface IOrderDetail {
    success: boolean;
    orders: [{
        createdAt: string,
        ingredients: string[],
        name: string,
        number: number,
        owner: string,
        status: string,
        updatedAt: string,
        __v: number,
        _id: string,
    }]
}
export interface IUserDataPayload {
    user: {
        name: string | null;
        email: string | null;
    };
    success: boolean;
}

export type TFormPasswordToken = {
    password: string;
    token: string;
};

export enum WebsocketStatus {
    CONNECTING = 'CONNECTING...',
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE'
}

export interface IWSOrdersResponse extends IResponseSuccess {
    orders: [
        {
            ingredients: string[],
            _id: string,
            name: string;
            status: string,
            number: number,
            createdAt: string,
            updatedAt: string
        }
    ],
    total: number,
    totalToday: number
}

export interface IFeedsIngredient {
    createdAt: string;
    ingredients: string[];
    name: string;
    number: number
    status: string;
    updatedAt: string;
    _id: string;
}