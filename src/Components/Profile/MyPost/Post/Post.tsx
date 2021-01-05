import React from 'react';
import s from './Post.module.css'

type PostType = {
    id: number
    message: string
    likes: number
}
export const Post = (props: PostType) => {
    return (
        <div className={s.post}>
            <div>
                <img
                    src="https://thumbs-prod.si-cdn.com/IjbgoCcHvUa6ISjPAvS8T6DTHA8=/fit-in/1600x0/https://public-media.si-cdn.com/filer/97/2c/972c4531-0552-4a49-b51b-4cdb5066bd1d/tacc1157_05_faceright_10k_rgb.jpg"
                    alt="img"/>
            </div>
            <div className={s.text}> {props.message}</div>
            <div className={s.likes}> likes {props.likes}</div>
        </div>
    )
}