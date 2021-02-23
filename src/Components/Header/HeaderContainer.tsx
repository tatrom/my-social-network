import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {Header} from "./Header";

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    setAuthUserData: (id: string, email: string, login: string, isAuth: boolean) => void
}


class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, email, login, true)
                }
            })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
