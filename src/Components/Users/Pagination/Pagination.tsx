import s from "../Users.module.css";
import React from "react";

type PaginationPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}
export const Pagination: React.FC<PaginationPropsType> = ({totalUserCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUserCount / pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.users}>
            {pages.map((p, id) => {
                return <span key={id} className={currentPage === p ? s.selectedPage : ""}
                             onClick={() => onPageChanged(p)
                             }>{p}/</span>
            })}
        </div>
    )
}