const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

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
    newMessageBody: string
}

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
    newMessageBody: ""
}

export const dialogReducer = (state: DialogPageType = initialState, action: DialogReducerType): DialogPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            const stateCopy = {...state}
            stateCopy.newMessageBody = action.body;
            debugger;
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody.trim();
            const stateCopy = {...state, messages: [...state.messages]}
            if (body) {
                stateCopy.newMessageBody = '';
                stateCopy.messages.push({id: 6, message: body})
            }
            return {...stateCopy}
        }

        default:
            return state
    }
}

export type DialogReducerType = SendMessageType | UpdateNewMessageBodyType


type SendMessageType = {
    type: "SEND-MESSAGE"
}

type UpdateNewMessageBodyType = {
    type: "UPDATE-NEW-MESSAGE-BODY",
    body: string
}


export const sendMessageCreator = (): SendMessageType => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text: string): UpdateNewMessageBodyType => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text
})

export default dialogReducer