import orderReducer from './order'
import {fetchOrderNum} from "./action-creators";

describe('order reducers tests', () => {

    const initialState = {
        orderData: null,
        loading: false,
        error: null,
    }

    it("should handle pending create order", () => {

        const action = {type: fetchOrderNum.pending.type};
        const result = orderReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            loading: true,
        });
    });

    it("should handle fulfilled create order", () => {

        const action = {
            type: fetchOrderNum.fulfilled.type,
            payload: {
                name: 'Burger',
                order: {
                    ingredients: [
                        {_id: "643d69a5c3f7b9001cfa0943"},
                        {_id: "643d69a5c3f7b9001cfa0941"},
                        {_id: "643d69a5c3f7b9001cfa0941"}
                    ]
                },
                success: true
            }
        };
        const result = orderReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            orderData: action.payload,
        });
    });

    it("should handle rejected create order", () => {

        const action = {
            type: fetchOrderNum.rejected.type,
            error: {
                message: 'Create order error'
            }
        };
        const result = orderReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            error: action.error.message,
            orderData: null,
        });
    });

})