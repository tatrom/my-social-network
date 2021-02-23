import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-KEY": "fae18199-e7fc-4874-8413-33891c1f13c5"
    }
})

export const UsersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`/follow/${userId}`)
            .then(response => response.data)
    },
    unfollowUser(userId: number) {
        return instance.delete(`/follow/${userId}`)
            .then(response => response.data)
    }
}