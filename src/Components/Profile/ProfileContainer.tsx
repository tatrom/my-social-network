import React from 'react';
import axios from "axios";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {ProfileType, StateType} from "../../Redux/state";
import {addPost, setUserProfile, updateNewPostText} from "../../Redux/profile-reducer";

export type ProfilePropsType = {
    profile: ProfileType | null
    addPost: () => void
    updateNewPostText: (newText: string) => void
    setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response => {
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

export default connect(mapStateToProps, {addPost, updateNewPostText, setUserProfile})(ProfileContainer)
