// INIT_SOCKET
// to be dispatched when the main app is rendering for the first time after login: initializes a socket.io client and stores it in the store.
// SET_USER_INFO
// payload: { userInfo: User }
// updates the user info in the store. To use when editing the profile before sending the PUT request, as well as when logging in and retrieving the user info.
// SET_ACTIVE_CHAT
// payload: { chatId: string }
// updates the current active chat in the main chat component, which supposedly has a React.useEffect listening to this change and reacting accordingly.
// SET_HISTORY
// payload: { chatId: string, history: Message[] }
// sets the history for the requested chatId with the history in the payload. To be used when retrieving the history for a chat.
// NEW_MESSAGE 
// payload: { chatId: string, message: Message }
// appends the message to the history of the chat with _id equal to chatId
//     (i.e. store.chats.list[action.payload.chatId])
// if you are the sender of the message, (i.e. message.sender === store.userInfo._id) then you should  also store.socket.emit the appropriate event (check the Socket.io guidelines)
export const ACTIONS = {
    USER_LOGIN: 'USER_LOGIN',
    USER_LOGOUT: 'USER_LOGOUT',
    SET_USER_INFO: 'SET_USER_INFO',
    SET_ACTIVE_CHAT: 'SET_ACTIVE_CHAT',
    SET_HISTORY: 'SET_HISTORY',
    NEW_MESSAGE: 'NEW_MESSAGE',
    NEW_CHAT: 'NEW_CHAT',
    INIT_SOCKET: 'INIT_SOCKET'
}

export const userLoginAction = () => ({
    type: ACTIONS.USER_LOGIN,
})

export const userLogoutAction = () => ({
    type: ACTIONS.USER_LOGOUT,
})


export const setUserInfo = (userInfo) => ({
    type: ACTIONS.SET_USER_INFO,
    payload: userInfo
})

export const setActiveChat = (chatId) => ({
    type: ACTIONS.SET_ACTIVE_CHAT,
    payload: chatId
})

export const setHistory = (chatId, history) => ({
    type: ACTIONS.SET_HISTORY,
    payload: { chatId, history }
})

export const setNewMessage = (chatId, message) => ({
    type: ACTIONS.NEW_MESSAGE,
    payload: { chatId, message }
})

export const addNewChat = (chatId) => ({
    type: ACTIONS.NEW_CHAT,
    payload: { chatId }
})