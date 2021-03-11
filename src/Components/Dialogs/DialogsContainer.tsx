import {DialogReducerType, sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {compose} from "redux";
import {ComponentType} from "react";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


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
        sendMessage: () => dispatch(sendMessageCreator())
    }
}

export default compose<ComponentType>(WithAuthRedirect, connect(MapStateToStore, MapDispatchToProps))(Dialogs)