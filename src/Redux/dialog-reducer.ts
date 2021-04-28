const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

//initial state
let initialState = {
    messages: [
        {id: 1, message: "Hello, i'm first message"},
        {id: 2, message: "Hello, I'm second message"},
        {id: 3, message: "Hello, I'm third message"},
        {id: 4, message: "Hello, I'm fourth message"},
    ],
    dialogs: [
        {id: 1, name: "Anna"},
        {id: 1, name: "Roman"},
        {id: 1, name: "Renat"},
        {id: 1, name: "Anatoly"}
    ],
}

//reducer
export const dialogReducer = (state: DialogPageType = initialState, action: DialogReducerType): DialogPageType => {
    switch (action.type) {

        case SEND_MESSAGE: {
            const stateCopy = {...state, messages: [...state.messages]}
            if (action.message) {
                stateCopy.messages.push({id: 6, message: action.message})
            }
            return {...stateCopy}
        }

        default:
            return state
    }
}

//types
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string

}
export type DialogPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}

type SendMessageType = ReturnType<typeof SendMessageAC>
type UpdateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyCreator>
export type DialogReducerType = SendMessageType | UpdateNewMessageBodyType


//action creators
export const SendMessageAC = (message: string) => ({type: SEND_MESSAGE, message} as const )
export const updateNewMessageBodyCreator = (text: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text} as const )

export default dialogReducer