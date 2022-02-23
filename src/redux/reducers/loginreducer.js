import { AnyAction } from "redux"
import { ACTIONS } from "../actions/index.js"
import { initialState } from "../store"

const userReducer = (state = initialState.user, action) => {
    switch(action.type) {
        case ACTIONS.USER_LOGIN: return {
            ...state,
            isLoggedIn: true
        }
        default: return state
    }
}

export default userReducer