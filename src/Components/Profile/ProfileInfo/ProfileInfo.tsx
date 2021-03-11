import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";

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
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://st2.depositphotos.com/1606672/5285/i/600/depositphotos_52852189-stock-photo-recreational-entrepreneur-man-with-laptop.jpg"*/}
            {/*        alt="img"/>*/}
            {/*</div>*/}

            <div className={s.userImg}>
                {photo !== null &&
                <img src={props.profile.photos.large} width='100' alt={'img'}/>}
            </div>
            <ProfileStatus status={props.status} UpdateStatus={props.UpdateStatus}/>
        </div>
    )
}