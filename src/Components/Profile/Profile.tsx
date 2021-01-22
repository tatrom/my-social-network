import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPost/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes} from "../../Redux/state";

type PostType = {
    id: number
    message: string
    likes: number
}
type ProfileType = {
    posts: Array<PostType>
    dispatch: (action: ActionTypes) => void
    newPostText: string
}
export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} dispatch={props.dispatch.bind(props.dispatch)} newPostText={props.newPostText}/>
        </div>
    )
}
