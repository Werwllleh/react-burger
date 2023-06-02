import {
    user_order_wsClose,
    user_order_wsConnecting,
    user_order_wsError,
    user_order_wsMessage,
    user_order_wsOpen,
} from "./action-creators";
import {userOrdersReducer} from "./user-orders";
import {WebsocketStatus} from "../../utils/types/types";

describe('WS user orders test', () => {

    const initialState = {
        status: WebsocketStatus.OFFLINE,
        usersOrders: null,
        connectingError: ""
    }

    it('should handle ws connecting for user orders', () => {

        const action = {type: user_order_wsConnecting};
        const result = userOrdersReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            status: WebsocketStatus.CONNECTING
        });
    });

    it('should handle ws open for user orders', () => {

        const action = {type: user_order_wsOpen};
        const result = userOrdersReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            status: WebsocketStatus.ONLINE
        });
    });

    it('should handle ws close for user orders', () => {

        const action = {type: user_order_wsClose};
        const result = userOrdersReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            status: WebsocketStatus.OFFLINE
        });
    });

    it('should handle ws close for user orders', () => {

        const action = {
            type: user_order_wsError,
            payload: 'WS error'
        };
        const result = userOrdersReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            connectingError: action.payload
        });
    });

    it('should handle ws message for user orders', () => {

        const action = {
            type: user_order_wsMessage,
            payload: {
                orders: [{id: 'ingredient1'}, {id: 'ingredient2'}, {id: 'ingredient3'}, {id: 'ingredient4'},],
                success: true,
                total: 777,
                totalToday: 77
            }
        };
        const result = userOrdersReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            usersOrders: action.payload
        });
    });

})