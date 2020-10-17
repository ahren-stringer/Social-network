import React from 'react'
import s from './Users.module.css'

let Pagination = (props) => {
    debugger
    let pageCount = Math.ceil(props.totalCount / props.onOnePage);
    let arr = [];
    for (let i = 1; i <= pageCount; i++) {
        arr.push(i)
    }
    return <div>
        {
            arr.map(item => <span className={item === props.numberOfPage ? s.active : ''}
                onClick={(e) => { props.onPageChange(item) }}>{item}</span>)
        }
    </div>
};

export default Pagination