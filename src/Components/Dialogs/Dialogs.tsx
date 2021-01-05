import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogsItem/DialogsItem';
import {Message} from "./Message/Message";

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type DialogsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name}/>);
    let messageElements = props.messages.map(message => <Message message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}
