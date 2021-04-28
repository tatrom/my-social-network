import profileReducer, {addPost, deletePost, setStatus} from "./profile-reducer";

it('Post should be added', () => {
    //data
    const action = addPost('Test post')

    const state = {
        posts: [
            {id: 1, message: "Its a first post", likes: 3},
            {id: 2, message: "Its a second post", likes: 3},
            {id: 3, message: "Its a third post", likes: 3},
            {id: 4, message: "Its a fourth post", likes: 3},
            {id: 5, message: "Its a fifth post", likes: 3},
        ],
        profile: null,
        status: ''
    }

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(6)
})

it('Post should', () => {
    //data
    const action = addPost('Test post')

    const state = {
        posts: [
            {id: 1, message: "Its a first post", likes: 3},
            {id: 2, message: "Its a second post", likes: 3},
            {id: 3, message: "Its a third post", likes: 3},
            {id: 4, message: "Its a fourth post", likes: 3},
            {id: 5, message: "Its a fifth post", likes: 3},
        ],
        profile: null,
        status: ''
    }

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(6)
})

it('Status should be changed', () => {
    //data
    const action = setStatus('Test status')

    const state = {
        posts: [
            {id: 1, message: "Its a first post", likes: 3},
            {id: 2, message: "Its a second post", likes: 3},
            {id: 3, message: "Its a third post", likes: 3},
            {id: 4, message: "Its a fourth post", likes: 3},
            {id: 5, message: "Its a fifth post", likes: 3},
        ],
        profile: null,
        status: ''
    }

    const newState = profileReducer(state, action)

    expect(newState.status).toBe('Test status')
})

it('Post should be deleted', () => {
    //data
    const action = deletePost(4)

    const state = {
        posts: [
            {id: 1, message: "Its a first post", likes: 3},
            {id: 2, message: "Its a second post", likes: 3},
            {id: 3, message: "Its a third post", likes: 3},
            {id: 4, message: "Its a fourth post", likes: 3},
            {id: 5, message: "Its a fifth post", likes: 3},
        ],
        profile: null,
        status: ''
    }

    const newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
})