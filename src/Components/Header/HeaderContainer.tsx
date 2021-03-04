import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {Header} from "./Header";
import {authMe, setAuthUserData} from "../../Redux/auth-reducer";

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    authMe: () => void
}


class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.authMe()
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

export default connect(mapStateToProps, {setAuthUserData, authMe})(HeaderContainer)
