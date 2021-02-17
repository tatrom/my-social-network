import React from 'react';
import axios from "axios";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {ProfileType} from "../../Redux/state";
import {setUserProfile} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type PathParamsType = {
    userId: string
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if ( !userId ) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.ProfilePage.profile
    }
}
let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)
