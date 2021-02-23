import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogsItem/DialogsItem';
import {Message} from "./Message/Message";
import {DialogPageType} from "../../Redux/state";


type DialogsType = {
    dialogPage: DialogPageType
    sendMessage: () => void
    newMessageChange: (newMessage: string) => void
}
export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogPage.dialogs.map((dialog, id) => <DialogItem key={id} name={dialog.name}/>);
    let messageElements = props.dialogPage.messages.map((message, id) => <Message key={id} message={message.message}/>);
    let newMessageBody = props.dialogPage.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger;
        let body = e.target.value;
        props.newMessageChange(body)

    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter")
            props.sendMessage()
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
                                   onKeyPress={e => onKeyPressHandler(e)}
                    /></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
