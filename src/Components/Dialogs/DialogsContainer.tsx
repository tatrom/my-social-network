import {DialogReducerType, sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";



let MapStateToStore = (state: RootStateType) => {
    return {
        dialogPage: state.DialogPage,
        isAuth: state.Auth.isAuth
    }
}

let MapDispatchToProps = (dispatch: (action: DialogReducerType) => void) => {
    return {
        newMessageChange: (newMessage: string) => {
        dispatch(updateNewMessageBodyCreator(newMessage))
    },
        sendMessage:() =>  dispatch(sendMessageCreator())
}
}

export const DialogsContainer = connect(MapStateToStore,MapDispatchToProps )(Dialogs)
