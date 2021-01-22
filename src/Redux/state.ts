export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
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


export type ActionTypes = AddPostActionType | ChangeNewTextActionType | UpdateNewMessageBodyType | SendMessageType

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

export const addPostActionCreator = (): ActionTypes => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText: string): ActionTypes => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})
export const sendMessageCreator = (): ActionTypes => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text: string): ActionTypes => ({type: UPDATE_NEW_MESSAGE_BODY, body: text})

export const store: StoreType = {
    _state: {
        DialogPage: {
            messages: [
                {id: 1, message: "Hello, i'm first message"},
                {id: 2, message: "Hello, I'm second message"},
                {id: 3, message: "Hello, I'm third message"},
                {id: 4, message: "Hello, I'm fourth message"},
            ],
            dialogs: [
                {id: 1, name: "Anna"},
                {id: 1, name: "Roman"},
                {id: 1, name: "Renat"},
                {id: 1, name: "Anatoly"}
            ],
            newMessageBody: ""
        },
        ProfilePage: {
            posts: [
                {id: 1, message: "Its a first post", likes: 3},
                {id: 2, message: "Its a second post", likes: 3},
                {id: 3, message: "Its a third post", likes: 3},
                {id: 4, message: "Its a fourth post", likes: 3},
                {id: 5, message: "Its a fifth post", likes: 3},
            ],
            newText: ""

        },
        Users: {
            users: [
                {id: 1, name: "Roman", date: 2020},
                {id: 2, name: "Elena", date: 2019},
                {id: 3, name: "Sergey", date: 2018},
                {id: 4, name: "Vlad", date: 2020}
            ]
        }

    },
    _callSubscriber() {

    },
    subscribe(callback) {
        this._callSubscriber = callback;
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let text = this._state.ProfilePage.newText.trim()
            if (text) {
                let newPost: PostType = {
                    id: 1,
                    message: text,
                    likes: 5
                }
                this._state.ProfilePage.posts.push(newPost);
                this._state.ProfilePage.newText = '';
                this._callSubscriber();
            }
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.ProfilePage.newText = action.newText;
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.DialogPage.newMessageBody = action.body;
            this._callSubscriber()
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.DialogPage.newMessageBody;
            this._state.DialogPage.newMessageBody = '';
            this._state.DialogPage.messages.push({id: 6, message: body})
            this._callSubscriber()
        }
    }
}

type PostType = {
    id: number
    message: string
    likes: number
}

type DialogsType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    message: string

}

type UserType = {
    id: number
    name: string
    date: number
}
export type DialogPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageBody: string
}

type ProfilePageType = {
    posts: Array<PostType>
    newText: string
}

type UsersType = {
    users: Array<UserType>
}

export type StateType = {
    DialogPage: DialogPageType
    ProfilePage: ProfilePageType
    Users: UsersType
}