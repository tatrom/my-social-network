import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css'
import {AllUsers} from "./Users/AllUsers";

type UserType = {
    id: number
    name: string
    date: number
}

type NavbarType = {
    users: Array<UserType>
}
export const Navbar = (props: NavbarType) => {
    return <div className={s.nav}>
        <ul>
            <li><NavLink to={"/profile"} activeClassName={s.active}>Profile</NavLink></li>
            <li><NavLink to={"/dialogs"} activeClassName={s.active}>Messages</NavLink></li>
            <li><NavLink to={"/news"} activeClassName={s.active}>News</NavLink></li>
            <li><NavLink to={"/music"} activeClassName={s.active}>Music</NavLink></li>
            <li><NavLink to={"/settings"} activeClassName={s.active}>Settings</NavLink></li>
            <li>
                <AllUsers users={props.users}/>
            </li>
        </ul>
    </div>
}