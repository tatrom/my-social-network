import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-KEY": "8c49b133-928a-4a57-b997-bbf0ea6abb17"
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
    },
}

export const profileApi = {
    getProfile(userId: string) {
        return instance.get(`/profile/${userId}`)
    },
    setStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status`, {status})
    }
}
export const authApi = {
    setProfile(userId: string) {
        console.warn('Obsolete method. Use profileApi object')
        return profileApi.getProfile(userId)
    },
    me() {
        return instance.get(`/auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('/auth/login', {email, password, rememberMe}
        )
    },
    logout() {
        return instance.delete('/auth/login')
    },
}