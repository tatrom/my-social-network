import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../Redux/state";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src="https://st2.depositphotos.com/1606672/5285/i/600/depositphotos_52852189-stock-photo-recreational-entrepreneur-man-with-laptop.jpg"
                    alt="img"/>
            </div>

            <div className={s.userImg}>
                <img src={props.profile?.photos.large} alt="photo" width='100'/>
            </div>
            <div className={s.description}>ava + description</div>
        </div>
    )
}