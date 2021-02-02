import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {ActionTypes, StateType} from "../../../Redux/state";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


let MapStateToStore = (state: StateType) => {
    return {
        posts: state.ProfilePage.posts,
        newPostText: state.ProfilePage.newText
    }
}
let MapDispatchToStore = (dispatch: (action: ActionTypes) => void) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(MapStateToStore, MapDispatchToStore)(MyPosts)
