import { applyMiddleware, createStore, compose } from 'redux';
import userReducer from '../reducers/indexReducer.js';
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

export let store = createStore(userReducer, initialState, composeThatWorks(applyMiddleware(thunk)))