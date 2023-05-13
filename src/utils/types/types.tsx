export type TIngredientsFetch = { data: IIngredientArr[] } & IResponseSuccess;

export interface IIngredientArr {
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

export interface IIngredientInfo {
    info: IIngredientArr
}

export interface IIngredientArrAndKey extends IIngredientArr {
    key: string;
    info: IIngredientArr;
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