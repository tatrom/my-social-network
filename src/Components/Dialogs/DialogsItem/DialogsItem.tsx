import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./DialogsItem.module.css";

type DialogItemType = {
    name: string
}

export const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialogItem}>
            <NavLink to={'/dialogs/'} className={s.dialogItem}>{props.name}</NavLink>
        </div>
    )
}
