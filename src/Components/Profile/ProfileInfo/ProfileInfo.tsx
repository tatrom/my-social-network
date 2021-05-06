import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import UserImg from "../../../assets/images.jpeg";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
    UpdateStatus: (status: string) => void
    setPhoto: (photo: File) => void
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    }

    const onSetPhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.setPhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={s.userImg}>
                <img src={props.profile.photos.large || UserImg} width='100' alt={'img'} className={s.mainPhoto}/>
                {props.isOwner && <input type="file" onChange={onSetPhotoChange}/>}
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.UpdateStatus}/>
        </div>
    )
}