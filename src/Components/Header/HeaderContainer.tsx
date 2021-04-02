import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {Header} from "./Header";
import {getAuthUserData, logout, setAuthUserData} from "../../Redux/auth-reducer";

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    getAuthUserData: () => void
    logout: () => void
}


class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <>
            <Header {...this.props} />
        </>
    }
}

const mapStateToProps = (store: RootStateType) => {
    return {
        isAuth: store.Auth.isAuth,
        login: store.Auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserData, getAuthUserData, logout})(HeaderContainer)
