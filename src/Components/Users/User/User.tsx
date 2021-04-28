import {NavLink} from "react-router-dom";
import UserImg from "../../../assets/images.jpeg";
import React from "react";
import {UserType} from "../../../Redux/users-reducer";

type PropsType = {
    user: UserType
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    toggleIsFollowing: Array<number>
}

export const User: React.FC<PropsType> = ({user, followUser, unfollowUser, toggleIsFollowing}, key) => {
    return (
        <div key={key}>
            <div>{user.name}</div>
            <div>{user.status ? user.status : "I don't have a status"}</div>
            <div>{user.followed ?
                <button disabled={toggleIsFollowing.some(id => user.id === id)} onClick={() => {
                    unfollowUser(user.id)
                }
                }>
                    Unfollow
                </button> :
                <button disabled={toggleIsFollowing.some(id => user.id === id)} onClick={() => {
                    followUser(user.id)
                }}>Follow</button>}</div>
            <div>{user.status}</div>
            <NavLink to={`/profile/${user.id}`}>
                <img src={user.photos.small !== null ? user.photos.small : UserImg} alt={'user'}/>
            </NavLink>
        </div>
    )
}