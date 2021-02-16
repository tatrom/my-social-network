import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPost/MyPostsContainer";


export const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}