import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type PostType = {
    id: number
    message: string
    likes: number
}

type MyPostType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}
export const MyPosts = (props: MyPostType) => {
    let posts = props.posts.map( (el) => <Post id={el.id} message={el.message} likes={el.likes} />)
    let newTextAreaElement = React.createRef<HTMLTextAreaElement>()

    function addPost() {
        let text = newTextAreaElement.current;
        if ( text ) {
            props.addPost(text.value)
            text.value = '';
        }
    }

    return (
        <div className={s.mypost}>
            <textarea ref={newTextAreaElement}></textarea>
            <button onClick={addPost}>Add post</button>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}