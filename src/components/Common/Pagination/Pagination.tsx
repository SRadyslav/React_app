import React, { useState } from "react";
import s from "./Pagination.module.css";
import cn from "classnames";

type PropsType = {
    totalCount: number
    pageSize: number 
    onPageChanged?: (pageNumber:number)=> void
    currentPage?:number 
    portionSize?: number
}

const Pagination: React.FC<PropsType> = ({ totalCount, pageSize, onPageChanged = x => x, currentPage = 1, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.selectPage}>
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}

            {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                    return <span
                        onClick={(e) => {
                            onPageChanged(p);
                        }}
                        key={p}
                        className={cn({[s.selectedPage]:currentPage === p},  s.pageNumber)}>{p}</span>
                })}

            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }} >Next</button>}
        </div>
    )
}
export default Pagination;
