import React from "react";
import s from './User.module.css'

type UserType = {
    id: number
    name: string
    date: number
}

export function User(props: UserType) {
    return (
        <div className={s.user}>
            <div>User Name:{props.name}</div>
            <div>Date of registration:{props.date}</div>
        </div>
    )
}