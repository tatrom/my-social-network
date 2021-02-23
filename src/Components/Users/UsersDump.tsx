import React from "react";
import {UserType} from "../../Redux/state";
import s from './Users.module.css'
import UserImg from '../../assets/images.jpeg'
import {NavLink} from "react-router-dom";
import {UsersApi} from "../../api/api";

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
            {pages.map((p, id) => {
                return <span key={id} className={props.currentPage === p ? s.selectedPage : ""}
                             onClick={(e) => props.onPageChanged(p)
                             }>{p}/</span>
            })}
            {props.users.map((u, id) => <div key={id}>
                <div>{u.name}</div>
                <div>{u.status ? u.status : "I don't have a status"}</div>
                <div>{u.followed ?
                    <button onClick={() => {
                        UsersApi.unfollowUser(u.id).then(data => {
                            if (data.resultCode === 0) {
                                props.unfollowUser(u.id)
                            }
                        })
                    }
                    }>
                        Unfollow
                    </button> :
                    <button onClick={() => {
                        UsersApi.followUser(u.id).then(data => {
                            if (data.resultCode === 0) {
                                props.followUser(u.id)
                            }
                        })
                        props.followUser(u.id)
                    }}>Follow</button>}</div>
                <div>{u.status}</div>
                <NavLink to={`/profile/${u.id}`}>
                    <img src={u.photos.small !== null ? u.photos.small : UserImg}/>
                </NavLink>
            </div>)}
        </div>
    </div>
}