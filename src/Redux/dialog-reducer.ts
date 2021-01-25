import {ActionTypes, PostType, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const profileReducer = (state: ProfilePageType, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            let text = state.newText.trim()
            if (text) {
                let newPost: PostType = {
                    id: 1,
                    message: text,
                    likes: 5
                }
            }
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newText = action.newText;
            return state;

        default:
            return state;
    }
}