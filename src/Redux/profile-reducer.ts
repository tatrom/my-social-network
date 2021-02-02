import {ActionTypes, PostType, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
        posts: [
            {id: 1, message: "Its a first post", likes: 3},
            {id: 2, message: "Its a second post", likes: 3},
            {id: 3, message: "Its a third post", likes: 3},
            {id: 4, message: "Its a fourth post", likes: 3},
            {id: 5, message: "Its a fifth post", likes: 3},
        ],
        newText: ""
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

        default:
            return state;
    }
}

export const addPostActionCreator = (): ActionTypes => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText: string): ActionTypes => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})

export default profileReducer