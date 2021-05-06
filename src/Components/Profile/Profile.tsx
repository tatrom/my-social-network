import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPost/MyPostsContainer";
import {ProfileType} from "../../Redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
    UpdateStatus: (status: string) => void
    setPhoto: (photo: File) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} status={props.status} UpdateStatus={props.UpdateStatus} isOwner={props.isOwner} setPhoto={props.setPhoto}/>
            <MyPostsContainer/>
        </div>
    )
}
