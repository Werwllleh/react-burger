import orderDetailDataReducer from './order-detail-data';
import {fetchOrderDetailData} from "./action-creators";

describe('order information reducers tests', () => {

    const initialState = {
        orderInfo: null,
        loading: false,
        error: null,
    }

    it("should handle pending create order", () => {

        const action = {type: fetchOrderDetailData.pending.type};
        const result = orderDetailDataReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            loading: true,
        });
    });

    it("should handle fulfilled create order", () => {

        const action = {
            type: fetchOrderDetailData.fulfilled.type,
            payload: {
                "success": true,
                "orders": [
                    {
                        "_id": "6479e2c98a4b62001c852977",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093c",
                            "643d69a5c3f7b9001cfa093f",
                            "643d69a5c3f7b9001cfa0948",
                            "643d69a5c3f7b9001cfa093c"
                        ],
                        "owner": "644d672545c6f2001be6ee11",
                        "status": "done",
                        "name": "Альфа-сахаридный бессмертный краторный бургер",
                        "createdAt": "2023-06-02T12:38:33.125Z",
                        "updatedAt": "2023-06-02T12:38:33.215Z",
                        "number": 6727,
                        "__v": 0
                    }
                ]
            }
        };
        const result = orderDetailDataReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            orderInfo: action.payload,
        });
    });

    it("should handle rejected create order", () => {

        const action = {
            type: fetchOrderDetailData.rejected.type,
            error: {
                message: 'Get order info failed'
            }
        };
        const result = orderDetailDataReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            error: action.error.message,
            orderInfo: null,
        });
    });

})