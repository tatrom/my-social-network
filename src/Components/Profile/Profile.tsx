import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPost/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../Redux/state";

type PostType = {
    id: number
    message: string
    likes: number
}
type ProfileType = {
    posts: Array<PostType>
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}
export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} updateNewPostText={updateNewPostText} newPostText={props.newPostText}/>
        </div>
    )
}
