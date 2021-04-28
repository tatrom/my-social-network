import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    UpdateStatus: (status: string) => void
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    }
    let photo = props.profile.photos.small !== null ? props.profile.photos.small : props.profile.photos.large
    return (
        <div>
            <div className={s.userImg}>
                {photo !== null &&
                <img src={props.profile.photos.large} width='100' alt={'img'}/>}
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.UpdateStatus}/>
        </div>
    )
}