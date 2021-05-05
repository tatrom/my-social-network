import React, {useState} from "react";
import s from './Pagination.module.css'

type PaginationPropsType = {
    totalItemsCount: number
    portionSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Pagination: React.FC<PaginationPropsType> = ({
                                                              totalItemsCount,
                                                              portionSize,
                                                              currentPage,
                                                              onPageChanged
                                                          }) => {
    let pagesCount = Math.ceil(totalItemsCount / portionSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize;
    let rightPortionNumber = portionNumber * portionSize;
    const setPage = (pageNumber: number) => {
        onPageChanged(pageNumber);
    }
    return (
        <>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREVIOUS</button>}
            {pages.filter(p => p > leftPortionNumber && p <= rightPortionNumber)
                .map(p => {
                    return <span onClick={() => setPage(p)}
                                 className={currentPage === p ? `${s.page} ${s.currentPage}` : s.page}> {p}</span>
                })
            }
            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
        </>
    )
}