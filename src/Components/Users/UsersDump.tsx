import React from "react";
import {UserType} from "../../Redux/state";
import s from './Users.module.css'
import UserImg from '../../assets/images.jpeg'

type UsersType = {
    users: Array<UserType>
    pageSize: number,
    totalUserCount: number,
    currentPage: number
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    setCurrentPage: (currentPage: number) => void
    onPageChanged: (pageNumber: number) => void
}


export function Users(props: UsersType) {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div className={s.users}>
            {pages.map(p => {
                return <span className={props.currentPage === p ? `${s.pages}${s.selectedPage}` : s.pages}
                             onClick={(e) => props.onPageChanged(p)
                             }>{p}/</span>
            })}
            {props.users.map(u => <div>
                <div>{u.name}</div>
                <div>{u.status ? u.status : "I don't have a status"}</div>
                <div>{u.followed ? <button onClick={() => props.unfollowUser(u.id)}>Unfollow</button> :
                    <button onClick={() => props.followUser(u.id)}>Follow</button>}</div>
                <div>{u.status}</div>
                <img src={u.photos.small !== null ? u.photos.small : UserImg}/>
            </div>)}
        </div>
    </div>
}