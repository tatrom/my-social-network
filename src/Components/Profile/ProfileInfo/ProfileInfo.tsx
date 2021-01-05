import React from "react";
import s from './ProfileInfo.module.css'

export function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src="https://st2.depositphotos.com/1606672/5285/i/600/depositphotos_52852189-stock-photo-recreational-entrepreneur-man-with-laptop.jpg"
                    alt="img"/>
            </div>
            <div className={s.description}>ava + description</div>
        </div>
    )
}