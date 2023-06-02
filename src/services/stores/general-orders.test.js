import {wsClose, wsConnecting, wsError, wsMessage, wsOpen} from "./action-creators";
import {generalOrdersReducer} from "./general-orders";
import {WebsocketStatus} from "../../utils/types/types";


describe('WS general orders test', () => {

    const initialState = {
        status: WebsocketStatus.OFFLINE,
        usersOrders: null,
        connectingError: ""
    }

    it('should handle ws connecting for user orders', () => {

        const action = {type: wsConnecting};
        const result = generalOrdersReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            status: WebsocketStatus.CONNECTING
        });
    });

    it('should handle ws open for user orders', () => {

        const action = {type: wsOpen};
        const result = generalOrdersReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            status: WebsocketStatus.ONLINE
        });
    });

    it('should handle ws close for user orders', () => {

        const action = {type: wsClose};
        const result = generalOrdersReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            status: WebsocketStatus.OFFLINE
        });
    });

    it('should handle ws close for user orders', () => {

        const action = {
            type: wsError,
            payload: 'WS error'
        };
        const result = generalOrdersReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            connectingError: action.payload
        });
    });

    it('should handle ws message for user orders', () => {

        const action = {
            type: wsMessage,
            payload: {
                orders: [{id: 'ingredient1'}, {id: 'ingredient2'}, {id: 'ingredient3'}, {id: 'ingredient4'},],
                success: true,
                total: 777,
                totalToday: 77
            }
        };
        const result = generalOrdersReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            usersOrders: action.payload
        });
    });

})