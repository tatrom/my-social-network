import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogsItem/DialogsItem';
import {Message} from "./Message/Message";
import {ActionTypes, DialogPageType, sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/state";


type DialogsType = {
    dialogPage: DialogPageType
    dispatch: (action: ActionTypes) => void

}
export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogPage.dialogs.map(dialog => <DialogItem name={dialog.name}/>);
    let messageElements = props.dialogPage.messages.map(message => <Message message={message.message}/>);
    let newMessageBody = props.dialogPage.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body))

    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter")
            props.dispatch(sendMessageCreator())
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   placeholder='Enter your message'
                                   onChange={onNewMessageChange}
                                   onKeyPress={e =>onKeyPressHandler(e)}
                    /></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
