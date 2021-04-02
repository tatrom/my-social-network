import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogsItem/DialogsItem';
import {Message} from "./Message/Message";
import {DialogPageType} from "../../Redux/dialog-reducer";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../Utils/validators/validators";
import {Redirect} from "react-router-dom";


type DialogsType = {
    isAuth: boolean
    dialogPage: DialogPageType
    sendMessage: (message: string) => void
}

type FormDataType = {
    newMessageBody: string
}

const maxLength100 = maxLengthCreator(100)

export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogPage.dialogs.map((dialog, id) => <DialogItem key={id} name={dialog.name}/>);
    let messageElements = props.dialogPage.messages.map((message, id) => <Message key={id} message={message.message}/>);

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    const addMessageHandler = (values: FormDataType) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addMessageHandler}/>
        </div>
    )
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} name={'newMessageBody'} validate={[requiredField, maxLength100]}/></div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)
