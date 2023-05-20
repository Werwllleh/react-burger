// socketMiddleware.ts
import type {Middleware, MiddlewareAPI} from 'redux';
import {AppDispatch, RootState} from '../store';
import {ActionCreatorWithoutPayload, ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {getUserInfo} from "../stores/action-creators";

export type TWsActionTypes = {
    wsConnect: ActionCreatorWithPayload<string>;
    wsDisconnect: ActionCreatorWithoutPayload;
    wsSendMessage?: ActionCreatorWithPayload<any>;
    wsConnecting: ActionCreatorWithoutPayload;
    onOpen: ActionCreatorWithoutPayload;
    onClose: ActionCreatorWithoutPayload;
    onError: ActionCreatorWithPayload<string>;
    onMessage: ActionCreatorWithPayload<any>;
}

export const socketMiddleware = (wsActions: TWsActionTypes): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

        return next => (action) => {
            const { dispatch } = store;

            const { wsConnect, wsConnecting, wsSendMessage, onOpen, onClose, onError, onMessage, wsDisconnect } = wsActions;

            if (wsConnect.match(action)) {
                socket = new WebSocket(action.payload);
                dispatch(wsConnecting());
            }
            if (socket) {
                socket.onopen = event => {
                    dispatch(onOpen());
                };

                socket.onerror = event => {
                    dispatch(onError('An error has occurred'));
                };

                socket.onmessage = event => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);

                    if (parsedData.message === 'Invalid or missing token') {
                        dispatch(getUserInfo())
                    } else {
                        dispatch(onMessage(parsedData));
                    }
                };

                socket.onclose = event => {
                    dispatch(onClose());
                };

                if (wsSendMessage?.match(action)) {
                    socket.send(JSON.stringify(action.payload));
                }

                if (wsDisconnect.match(action)) {
                    socket.close();
                    socket = null;
                }
            }

            next(action);
        };
    }) as Middleware;
};