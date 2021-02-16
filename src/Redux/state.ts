export type StoreType = {
    subscribe: (callback: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}

type AddPostActionType = {
    type: "ADD-POST"
}
type ChangeNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}
type UpdateNewMessageBodyType = {
    type: "UPDATE-NEW-MESSAGE-BODY",
    body: string
}
type SendMessageType = {
    type: "SEND-MESSAGE"
}
type FollowUserType = {
    type: "FOLLOW"
    userId: number
}

type UnfollowUserType = {
    type: "UNFOLLOW"
    userId: number
}

type SetUsersType = {
    type: "SET_USERS"
    users: Array<UserType>
}

type SetCurrentPage = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}

type SetTotalUserCount = {
    type: "SET_TOTAL_USERS_COUNT"
    totalUsersCount: number
}


export type ActionTypes =
    AddPostActionType
    | ChangeNewTextActionType
    | UpdateNewMessageBodyType
    | SendMessageType
    | FollowUserType
    | UnfollowUserType
    | SetUsersType
    | SetCurrentPage
    | SetTotalUserCount


// export const store: StoreType = {
//     _state: {
//         DialogPage: {
//             messages: [
//                 {id: 1, message: "Hello, i'm first message"},
//                 {id: 2, message: "Hello, I'm second message"},
//                 {id: 3, message: "Hello, I'm third message"},
//                 {id: 4, message: "Hello, I'm fourth message"},
//             ],
//             dialogs: [
//                 {id: 1, name: "Anna"},
//                 {id: 1, name: "Roman"},
//                 {id: 1, name: "Renat"},
//                 {id: 1, name: "Anatoly"}
//             ],
//             newMessageBody: ""
//         },
//         ProfilePage: {
//             posts: [
//                 {id: 1, message: "Its a first post", likes: 3},
//                 {id: 2, message: "Its a second post", likes: 3},
//                 {id: 3, message: "Its a third post", likes: 3},
//                 {id: 4, message: "Its a fourth post", likes: 3},
//                 {id: 5, message: "Its a fifth post", likes: 3},
//             ],
//             newText: ""
//
//         },
//         Users: {
//             users: [
//                 {id: 1, name: "Roman", date: 2020},
//                 {id: 2, name: "Elena", date: 2019},
//                 {id: 3, name: "Sergey", date: 2018},
//                 {id: 4, name: "Vlad", date: 2020}
//             ]
//         }
//
//     },
//     _callSubscriber() {
//
//     },
//     subscribe(callback) {
//         this._callSubscriber = callback;
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action) {
//         this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
//         this._state.DialogPage = dialogReducer(this._state.DialogPage, action)
//         this._callSubscriber()
//     }
// }

export type PostType = {
    id: number
    message: string
    likes: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string

}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null,
    photos: {
        small: string | null
        large: string | null
    },
    status: string | null
    "followed": boolean
}

export type DialogPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageBody: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newText: string
}

export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
}

export type StateType = {
    DialogPage: DialogPageType
    ProfilePage: ProfilePageType
    Users: UsersType
}