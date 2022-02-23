import { applyMiddleware, createStore, compose, applyMiddleware } from 'redux';
import chatReducer from '../reducers/chatReducer.js';
import thunk from 'redux-thunk'

const composeThatWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {

    user: {
        isLoggedIn: false,
        currentUser: null
    },
    chat: {
        selected: null,
        chatList: []
    }


}

export let configureStore = createStore(chatReducer, initialState, composeThatWorks(applyMiddleware(thunk)))