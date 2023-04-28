
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

export interface IIngredientArrAndKey extends IIngredientArr {
    key: string;
    info: IIngredientArr;
}

export interface IFormValuesDefault {
    name: string;
    email: string;
    password: string;
}

export interface ResponseError {
    error: string;
}

export interface RefreshData {
    success: boolean;
    refreshToken: string;
    accessToken: string;
};