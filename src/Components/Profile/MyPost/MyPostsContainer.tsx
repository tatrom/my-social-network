import {addPost, ProfileReducerType, updateNewPostText} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../Redux/redux-store";


let MapStateToStore = (state: RootStateType) => {
    return {
        posts: state.ProfilePage.posts,
    }
}
let MapDispatchToStore = (dispatch: (action: ProfileReducerType) => void) => {
    return {
        addPost: (postText: string) => {
            dispatch(addPost(postText))
        }

    }
}

export const MyPostsContainer = connect(MapStateToStore, MapDispatchToStore)(MyPosts)
