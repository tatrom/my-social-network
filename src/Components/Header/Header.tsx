import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

import {HeaderPropsType} from "./HeaderContainer";

export const Header = (props: HeaderPropsType) => {
    return <div className={s.header}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCmV4hdR0WwQdDksdPtHdYPSGo27bnOl0dA&usqp=CAU" alt="img"/>
        <div className={s.loginBlock}>
            {
                props.isAuth? <div>{props.login} <button onClick={props.logout}>Log out</button></div> : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </div>
}