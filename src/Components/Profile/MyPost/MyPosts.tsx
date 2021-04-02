import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {maxLengthCreator, requiredField} from '../../../Utils/validators/validators';
import {Textarea} from "../../common/FormsControls/FormsControls";

type PostType = {
    id: number
    message: string
    likes: number
}

type MyPostType = {
    posts: Array<PostType>
    addPost: (postText: string) => void
}

type FormDataType = {
    newPostBody: string
}

const maxLength10 = maxLengthCreator(10)
export const MyPosts = (props: MyPostType) => {
    let posts = props.posts.map((el, id) => <Post key={id} id={el.id} message={el.message} likes={el.likes}/>)

    function addPost(postText: FormDataType) {
        props.addPost(postText.newPostBody)
    }


    return (<>
            <AddPostReduxForm onSubmit={addPost}/>
            <div className={s.posts}>
                {posts}
            </div>
        </>
    )
}

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Post message'} component={Textarea} name={'newPostBody'}
                   validate={[requiredField, maxLength10]}/>
            <button>Add post</button>
        </form>
    )
}

const AddPostReduxForm = reduxForm<FormDataType>({
    form: 'profileAddPostForm'
})(AddPostForm)