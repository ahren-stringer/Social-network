import React from 'react';
import { Redirect } from 'react-router-dom';
import Login from '../Login/Login';
import Person from './Person/Person';
import PostsContainer from './Posts/PostsContainer';
import s from './Profile.module.css'

const Profile=(props)=>{
    return(
        <div>
          <Person status={props.profileStatus} profile={props.profile} UpdateProfileStatus={props.UpdateProfileStatusThunk}/>
          <PostsContainer/>
        </div>
    )
}

export default Profile