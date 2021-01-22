import React, {KeyboardEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionTypes, addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/state";

type PostType = {
    id: number
    message: string
    likes: number
}

type MyPostType = {
    posts: Array<PostType>
    dispatch: (action: ActionTypes) => void
    newPostText: string
}


export const MyPosts = (props: MyPostType) => {
    let posts = props.posts.map( (el) => <Post id={el.id} message={el.message} likes={el.likes} />)
    let newTextAreaElement = React.createRef<HTMLTextAreaElement>()

    function addPost() {
        props.dispatch(addPostActionCreator())
    }

    const UpdateText = () => {
        let text = newTextAreaElement.current?.value
        if ( text !== undefined ) {
        props.dispatch(updateNewPostTextActionCreator(text))
        }
    }

    let OnKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement> ) => {
        e.key === "Enter" && props.dispatch(addPostActionCreator())
        console.log(e.key)
    }
    return (
        <div className={s.mypost}>
            <textarea ref={newTextAreaElement}  value={props.newPostText} onChange={UpdateText} onKeyPress={ (e) => OnKeyPressHandler(e)}/>
            <button className={s.button} onClick={addPost}>Add post</button>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}