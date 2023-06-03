import constructorReducer, {
    addToConstructor,
    clearConstructorIngredients,
    removeFromConstructor,
    updateConstructorIngredients
} from './constructor-ingredients';

describe('constructor ingredients test', () => {

    const initialState = {
        bun: null,
        ingredients: []
    }

    it('should handle add bun to constructor', () => {

        const action = {
            type: addToConstructor,
            payload: {
                key: "7438c597-2d47-4a31-98df-408bd56c0c51",
                name: "Флюоресцентная булка R2-D3",
                type: "bun",
                _id: "643d69a5c3f7b9001cfa093d"
            },
        }

        const result = constructorReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            bun: action.payload,
            ingredients: []
        });
    });

    it('should handle add sauce or main to constructor', () => {

        const action = {
            type: addToConstructor,
            payload: {
                key: "7438c597-2d47-4a31-98df-408bd56c0c51",
                name: "Флюоресцентная булка R2-D3",
                type: "main",
                _id: "643d69a5c3f7b9001cfa093d"
            },
        }

        const result = constructorReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            bun: null,
            ingredients: [action.payload]
        });
    });

    it('should handle clear ingredient constructor', () => {

        const action = {
            type: clearConstructorIngredients,
        }

        const result = constructorReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            bun: null,
            ingredients: []
        });
    });

    it('should handle sorted ingredients on constructor', () => {

        const stateWithIngredients = {
            bun: null,
            ingredients: [
                {
                    key: "111",
                    name: "Салат R2-D3",
                    type: "main",
                },
                {
                    key: "222",
                    name: "Флюоресцентная булка R2-D3",
                    type: "main",
                },
                {
                    key: "333",
                    name: "Флюоресцентный соус R2-D3",
                    type: "main",
                },
            ]
        }

        const action = {
            type: updateConstructorIngredients,
            payload: {
                dragIndex: 0,
                hoverIndex: 1
            }
        }

        const result = constructorReducer(stateWithIngredients, action);

        expect(result).toEqual({
            ...stateWithIngredients,
            bun: null,
            ingredients: [
                {
                    key: "222",
                    name: "Флюоресцентная булка R2-D3",
                    type: "main",
                },
                {
                    key: "111",
                    name: "Салат R2-D3",
                    type: "main",
                },
                {
                    key: "333",
                    name: "Флюоресцентный соус R2-D3",
                    type: "main",
                },
            ]
        });
    });

    it('should handle delete ingredient from constructor', () => {

        const stateWithIngredients = {
            bun: null,
            ingredients: [
                {
                    key: "111",
                    name: "Салат R2-D3",
                    type: "main",
                },
                {
                    key: "222",
                    name: "Флюоресцентная булка R2-D3",
                    type: "main",
                },
                {
                    key: "333",
                    name: "Флюоресцентный соус R2-D3",
                    type: "main",
                },
            ]
        }

        const action = {
            type: removeFromConstructor,
            payload: {id: '222'}
        }

        const result = constructorReducer(stateWithIngredients, action);

        expect(result).toEqual({
            ...stateWithIngredients,
            bun: null,
            ingredients: [
                {
                    key: "111",
                    name: "Салат R2-D3",
                    type: "main",
                },
                {
                    key: "333",
                    name: "Флюоресцентный соус R2-D3",
                    type: "main",
                },
            ]
        });
    });
})