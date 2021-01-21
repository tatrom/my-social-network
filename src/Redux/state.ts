let EntireTreeRender  = () => {

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
type DialogPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
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
export const state: StateType = {
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
        ]
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

}

export let addPost = () => {
    let text = state.ProfilePage.newText.trim()
    if ( text ) {
        let newPost: PostType = {
            id: 1,
            message: text,
            likes: 5
        }
        state.ProfilePage.posts.push(newPost);
        state.ProfilePage.newText = '';
        EntireTreeRender();
    }
}

export let updateNewPostText = (newText: string) => {
    state.ProfilePage.newText = newText;
    EntireTreeRender()
}

export const subscribe = (callback: () => void ) => {
    EntireTreeRender = callback;
}