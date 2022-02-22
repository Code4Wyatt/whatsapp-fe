import { createStore, composeStore } from 'redux';
import chatReducer from '../reducers/chatReducer.js';
import storage from 'redux-persist/lib/storage';

const composeThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    chat: {

    },
    user: {},
    message: {}


}

export let configureStore = createStore(

    initialState,


)