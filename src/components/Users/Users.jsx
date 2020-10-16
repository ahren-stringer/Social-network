import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios'
import userImg from '../../assets/img/userImg.jpg'
import preloader from '../../assets/img/preLoader.gif'
import Preloader from '../common/PreLoader'
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import usersAPI from '../../api/api'

let Users=(props)=>{
    // if (!props.isAutorised) return <Redirect to='/login'/>
        let pageCount=Math.ceil(props.totalCount/props.onOnePage);
        let arr=[];
        for (let i=1;i<=pageCount;i++){
            arr.push(i)
        }
        debugger
       return <div>
           <div>
           {
               (!props.preloader? <Preloader/>
                :<div>
                    {   
                        arr.map(item=> <span className={item===props.numberOfPage ? s.active : ''}
                                            onClick={(e)=>{props.onPageChange(item)}}>{item}</span>)
                    }
                    {
                        props.users.map( item => <div key={item.id}>
                            <div> 
                                <NavLink to={'/profile/'+item.id}>
                                    <img className={s.ava_img} src={item.photos.small !=null ? item.photos.small: userImg} alt=""/>
                                </NavLink>
                                
                            </div>
                            <div>
                                <span>{item.name}</span><span>{item.status}</span>
                            </div>
                            <div>
                                {item.followed? <button disabled={props.toggleIsFetching.some(id=>id==item.id)}
                                onClick={()=>{
                                    props.UnfollowThunk(item.id)                                
                                    }                                   
                                }>unfollow</button>
                                :<button disabled={props.toggleIsFetching.some(id=>id==item.id)}
                                onClick={()=>{
                                    props.FollowThunk(item.id)
                                    }}>follow</button>}
                            </div>
                        </div>
                            )
                    }
                    </div>)
                    }
                </div>
           {/* {
               arr.map(item=> <span className={item===props.numberOfPage ? s.active : ''}
                                    onClick={(e)=>{props.onPageChange(item)}}>{item}</span>)
           }
            {
                props.users.map( item => <div key={item.id}>
                    <div>
                        <img className={s.ava_img} src={item.photos.small !=null ? item.photos.small: userImg} alt=""/>
                    </div>
                    <div>
                        <span>{item.name}</span><span>{item.status}</span>
                    </div>
                    <div>
                        {item.follow? <button onClick={()=>{props.unfollow(item.id)}}>unfollow</button>
                        :<button onClick={()=>{props.follow(item.id)}}>follow</button>}
                    </div>
                </div>
                    )
            } */}
        </div>
    };


export default Users