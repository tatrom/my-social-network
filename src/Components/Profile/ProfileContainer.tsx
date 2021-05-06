import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {ProfileType, setPhoto, setStatus, SetStatus, setUserProfile, UpdateStatus} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getUserProfile} from "../../Redux/auth-reducer";
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
    setStatus: (status: string) => void
    setPhoto: (photo: File) => void
}
type PathParamsType = {
    userId: string
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '14575'
        }
        this.props.getUserProfile(userId)
        this.props.SetStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    componentWillUnmount() {
        this.props.setStatus('')
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} status={this.props.status}
                         UpdateStatus={this.props.UpdateStatus} isOwner={!this.props.match.params.userId} setPhoto={this.props.setPhoto}/>
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
    UpdateStatus,
    setStatus,
    setPhoto
}), withRouter)(ProfileContainer)