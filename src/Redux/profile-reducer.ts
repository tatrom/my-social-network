import {ActionTypes, PostType, ProfilePageType, ProfileType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE"

let initialState = {
    posts: [
        {id: 1, message: "Its a first post", likes: 3},
        {id: 2, message: "Its a second post", likes: 3},
        {id: 3, message: "Its a third post", likes: 3},
        {id: 4, message: "Its a fourth post", likes: 3},
        {id: 5, message: "Its a fifth post", likes: 3},
    ],
    newText: "",
    profile: null
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            let text = state.newText.trim()
            const stateCopy = {...state, posts: [...state.posts]}
            if (text) {
                let newPost: PostType = {
                    id: 1,
                    message: text,
                    likes: 5
                }
                stateCopy.posts.push(newPost)
                stateCopy.newText = ''
            }
            return stateCopy
        case UPDATE_NEW_POST_TEXT:
            state.newText = action.newText;
            return {...state};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state;
    }
}

export const addPost = (): ActionTypes => ({type: ADD_POST})
export const updateNewPostText = (newText: string): ActionTypes => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})
export const setUserProfile = (profile: ProfileType): ActionTypes => ({
    type: SET_USER_PROFILE,
    profile
})

export default profileReducer