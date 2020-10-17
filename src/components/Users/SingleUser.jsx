import React from 'react'
import s from './Users.module.css'
import userImg from '../../assets/img/userImg.jpg'
import Preloader from '../common/PreLoader'
import { NavLink } from 'react-router-dom'

let SingleUser = ({item,FollowThunk,UnfollowThunk,toggleIsFetching}) => {
    return <div>
        <div>
            <NavLink to={'/profile/' + item.id}>
                <img className={s.ava_img} src={item.photos.small != null ? item.photos.small : userImg} alt="" />
            </NavLink>

        </div>
        <div>
            <span>{item.name}</span><span>{item.status}</span>
        </div>
        <div>
            {item.followed
                ? <button disabled={toggleIsFetching.some(id => id == item.id)}
                    onClick={() => {
                        UnfollowThunk(item.id)
                    }}>unfollow</button>

                : <button disabled={toggleIsFetching.some(id => id == item.id)}
                    onClick={() => {
                        FollowThunk(item.id)
                    }}>follow</button>}
        </div>
    </div>
};

export default SingleUser