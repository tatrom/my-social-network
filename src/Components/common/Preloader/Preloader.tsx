import {CircularProgress} from "@material-ui/core";
import React from "react";
import s from './Preloader.module.css'

export function Preloader() {
    return <div className={s.preloader}><CircularProgress color="secondary"/></div>
}