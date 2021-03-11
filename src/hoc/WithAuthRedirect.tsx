import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../Redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth: boolean
}
const MapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        isAuth: state.Auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...restProps as T} />
    }
    let ConnectedRedirectComponent = connect(MapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}