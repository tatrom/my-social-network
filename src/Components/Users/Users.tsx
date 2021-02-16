import React from "react";
import {UserType} from "../../Redux/state";
import s from './Users.module.css'
import axios from "axios";
import UserImg from '../../assets/images.jpeg'

type UsersType = {
    users: Array<UserType>
    pageSize: number,
    totalUserCount: number,
    currentPage: number
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}


export class Users extends React.Component<UsersType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            }
        )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={s.users}>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? `${s.pages}${s.selectedPage}` : s.pages}
                                 onClick={(e) => this.onPageChanged(p)
                                 }>{p}/</span>
                })}
                {this.props.users.map(u => <div>
                    <div>{u.name}</div>
                    <div>{u.status ? u.status : "I don't have a status"}</div>
                    <div>{u.followed ? <button onClick={() => this.props.unfollowUser(u.id)}>Unfollow</button> :
                        <button onClick={() => this.props.followUser(u.id)}>Follow</button>}</div>
                    <div>{u.status}</div>
                    {/*<div>{u.location.cit}</div>*/}
                    <img src={u.photos.small !== null ? u.photos.small : UserImg}/>
                </div>)}
            </div>
        )
    }
}