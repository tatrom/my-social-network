import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {log} from "util";

type PostType = {
    id: number
    message: string
    likes: number
}

type MyPostType = {
    posts: Array<PostType>
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}
export const MyPosts = (props: MyPostType) => {
    let posts = props.posts.map( (el) => <Post id={el.id} message={el.message} likes={el.likes} />)
    let newTextAreaElement = React.createRef<HTMLTextAreaElement>()

    function addPost() {

            props.addPost()
    }

    const UpdateText = () => {
        let text = newTextAreaElement.current?.value
        if ( text !== undefined ) {
        props.updateNewPostText(text)
        }
    }

    let OnKeyPressHandler = (e: number) => {
        e === 13 && props.addPost()
    }
    return (
        <div className={s.mypost}>
            <textarea ref={newTextAreaElement}  value={props.newPostText} onChange={UpdateText} onKeyPress={ (e) => OnKeyPressHandler(e.charCode)}/>
            <button className={s.button} onClick={addPost}>Add post</button>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}