const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE"

export type PostType = {
    id: number
    message: string
    likes: number
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        [key: string]: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type ProfilePageType = {
    posts: Array<PostType>
    newText: string
    profile: ProfileType | null
}

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

const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerType): ProfilePageType => {
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
            return {...state, profile: action.profile,}
        default:
            return state;
    }
}

type AddPostActionType = {
    type: "ADD-POST"
}
type ChangeNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}
type SetUserProfile = {
    type: "SET-USER-PROFILE"
    profile: ProfileType
}

export type ProfileReducerType = AddPostActionType | ChangeNewTextActionType | SetUserProfile

export const addPost = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostText = (newText: string): ChangeNewTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})
export const setUserProfile = (profile: ProfileType): SetUserProfile => ({
    type: SET_USER_PROFILE,
    profile
})

export default profileReducer