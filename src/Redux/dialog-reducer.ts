import {ActionTypes, DialogPageType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

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

export const dialogReducer = (state: DialogPageType = initialState, action: ActionTypes) => {
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

export const sendMessageCreator = (): ActionTypes => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text: string): ActionTypes => ({type: UPDATE_NEW_MESSAGE_BODY, body: text})

export default dialogReducer