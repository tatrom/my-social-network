import React from "react";
import {UserType} from "../../Redux/state";
import s from './Users.module.css'

type UsersType = {
    users: Array<UserType>
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    setUsers: (users: Array<UserType>) => void
}


export function Users(props: UsersType) {
    return (
        <div className={s.users}>
            {props.users.map(u => <div>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
                <div>{ u.followed ? <button onClick={ () => props.unfollowUser(u.id)}>Unfollow</button> : <button onClick={ () => props.followUser(u.id)}>Follow</button>}</div>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
                <img src={u.photo} />
            </div>)}
        </div>
    )
}