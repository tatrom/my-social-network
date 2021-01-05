import React from "react";
import {User} from "./User";
import s from './AllUsers.module.css'

type UserType = {
    id: number
    name: string
    date: number
}

type AllUsersType = {
    users: Array<UserType>
}

export function AllUsers(props: AllUsersType) {
    let users = props.users.map( (el) => <User id={el.id} date={el.date} name={el.name} />)

    return (
        <div className={s.users}>
            {users}
        </div>
    )
}