import {fetchIngredients} from "./action-creators";
import ingredientsReducer from "./ingredients-data";

describe('ingredients reducers tests', () => {

    const initialState = {
        ingredients: [],
        isLoading: false,
        error: null
    }

    it('should handle pending ingredients', () => {

        const action = {type: fetchIngredients.pending.type};
        const result = ingredientsReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            isLoading: true
        });
    });

    it('should handle fulfilled ingredients', () => {
        const mockIngredients = [
            { id: 'ingredientId1', name: 'Ingredient 1' },
            { id: 'ingredientId2', name: 'Ingredient 2' },
        ];

        const action = {
            type: fetchIngredients.fulfilled.type,
            payload: mockIngredients
        };

        const result = ingredientsReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            isLoading: false,
            ingredients: action.payload
        });
    });

    it('should handle rejected ingredients', () => {

        const action = {
            type: fetchIngredients.rejected.type,
            error: {
                message: 'Loading ingredients failed'
            }
        };

        const result = ingredientsReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            error: action.error.message,
            isLoading: false
        });
    });

});