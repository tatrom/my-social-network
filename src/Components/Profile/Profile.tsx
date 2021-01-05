import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPost/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type PostType = {
    id: number
    message: string
    likes: number
}
type ProfileType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}
export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    )
}
