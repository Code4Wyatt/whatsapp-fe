import { AnyAction } from "redux"
import { ACTIONS } from "../actions/index.js"
import { initialState } from "../store"

const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case ACTIONS.USER_LOGIN:
            return {
                ...state,
                isLoggedIn: true
            }
        case ACTIONS.SET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload
            }
        case ACTIONS.SET_ACTIVE_CHAT:
            return {
                selected: action.payload
            }
        case ACTIONS.SET_HISTORY:
            return {
                selected: action.payload
            }
        case ACTIONS.NEW_MESSAGE:
            return {
                selected: action.payload
            }


        default:
            return state
    }
}

export default userReducer