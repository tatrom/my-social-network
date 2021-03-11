import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {ProfileType, SetStatus, setUserProfile, UpdateStatus} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getUserProfile} from "../../Redux/auth-reducer";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
    status: string
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId: string) => void
    SetStatus: (userId: string) => void
    UpdateStatus: (status: string) => void
}
type PathParamsType = {
    userId: string
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '14575'
        }
        this.props.getUserProfile(userId)
        this.props.SetStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} status={this.props.status}
                         UpdateStatus={this.props.UpdateStatus}/>
            </div>
        )
    }

}

let mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.ProfilePage.profile
        ,
        isAuth: state.Auth.isAuth
        ,
        status: state.ProfilePage.status
    }
}

export default compose<ComponentType>(connect(mapStateToProps, {
    setUserProfile,
    getUserProfile,
    SetStatus,
    UpdateStatus
}), WithAuthRedirect, withRouter)(ProfileContainer)