import React from "react";
import s from "./Pagination.module.css"



const Pagination = ({totalCount, pageSize, onPageChanged, currentPage}) => {
    let pagesCount = Math.ceil(totalCount /
        pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.selectPage}>
            {pages.map(p => {
                return <span
                    onClick={(e) => {
                        onPageChanged(p);
                    }}
                    className={currentPage === p && s.selectedPage}>{p}</span>
            })}
        </div>
    )
}
export default Pagination;