import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
import {ActionTypes, StateType} from "../../Redux/state";



let MapStateToStore = (state: StateType) => {
    return {
        dialogPage: state.DialogPage
    }
}

let MapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        newMessageChange: (newMessage: string) => {
        dispatch(updateNewMessageBodyCreator(newMessage))
    },
        sendMessage:() =>  dispatch(sendMessageCreator())
}
}

export const DialogsContainer = connect(MapStateToStore,MapDispatchToProps )(Dialogs)
