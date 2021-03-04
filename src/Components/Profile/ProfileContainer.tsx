import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {ProfileType, setUserProfile} from "../../Redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {getUserProfile} from "../../Redux/auth-reducer";

type MapStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId: string) => void
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
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if(!this.props.isAuth) {
           return <Redirect to={'/login'} />
        }
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.ProfilePage.profile,
        isAuth: state.Auth.isAuth
    }
}
let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile, getUserProfile})(withUrlDataContainerComponent)
