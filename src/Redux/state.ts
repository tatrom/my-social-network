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

type ToggleIsFetching = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
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
    | ToggleIsFetching

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
    isFetching: boolean

}

export type StateType = {
    DialogPage: DialogPageType
    ProfilePage: ProfilePageType
    Users: UsersType
}