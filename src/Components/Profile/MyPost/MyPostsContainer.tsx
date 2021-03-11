import {addPost, ProfileReducerType, updateNewPostText} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../Redux/redux-store";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";


let MapStateToStore = (state: RootStateType) => {
    return {
        posts: state.ProfilePage.posts,
        newPostText: state.ProfilePage.newText
    }
}
let MapDispatchToStore = (dispatch: (action: ProfileReducerType) => void) => {
    return {
        addPost: () => {
            dispatch(addPost())
        },
        updateText: (text: string) => {
            dispatch(updateNewPostText(text))
        }
    }
}

export const MyPostsContainer = connect(MapStateToStore, MapDispatchToStore)(MyPosts)
