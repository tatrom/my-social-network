import React from "react";
import s from './Users.module.css'
import {UserType} from "../../Redux/users-reducer";
import {User} from "./User/User";
import {Pagination} from "./Pagination/Pagination";

type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    toggleIsFollowing: Array<number>
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    setCurrentPage: (currentPage: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
}


export function Users(props: UsersType) {

    return <div>
        <div className={s.users}>
            <Pagination currentPage={props.currentPage} onPageChanged={props.onPageChanged} portionSize={props.pageSize}
                        totalItemsCount={props.totalUserCount}/>
            {props.users.map((u) => <User key={u.id} user={u} unfollowUser={props.unfollowUser}
                                          followUser={props.followUser}
                                          toggleIsFollowing={props.toggleIsFollowing}/>)}
        </div>
    </div>
}