import React from "react";
import {UserType} from "../../Redux/state";
import s from './Users.module.css'
import axios from "axios";
import UserImg from '../../assets/images.jpeg'

type UsersType = {
    users: Array<UserType>
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    setUsers: (users: Array<UserType>) => void
}


export class UsersC extends React.Component<UsersType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            }
        )
    }

    render() {
        return (
            <div className={s.users}>
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