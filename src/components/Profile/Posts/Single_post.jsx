import React from 'react';
import s from './Single_post.module.css'

const Single_post=(props)=>{
    return(
        <div className={s.item}>
          <div>
						{/* <span>{props.name}</span>
						<span>{props.part}</span> */}
						{props.name+' - '+props.message}
					</div>
					<div className={s.ava}>
						<img src="https://i.ebayimg.com/images/g/yicAAOSwT2dZ6h0k/s-l300.jpg" />
					</div>
        </div>
    )
}

export default Single_post