import React from 'react';
import s from './Profile.module.css'
import {connect} from 'react-redux';
import Profile from './Profile';
import {SetUserProfile,SetUserProfileThunk,SetProfileStatusThunk,UpdateProfileStatusThunk,UpdateAvaThunk} from '../../redux/profileReduser'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import * as axios from 'axios'

class ProfileContainer extends React.Component{

  componentDidMount(){
    let userId=this.props.match.params.users;
    if (!userId){
      userId=11744
    }
    this.props.SetProfileStatusThunk(userId)
    this.props.SetUserProfileThunk(userId)
  }
  render(){
    return <Profile {...this.props} profile={this.props.profile} isOwner={!this.props.match.params.users}/>
  }
}

let mapStateToProps=(state)=>{
  return{// posts: state.profileData.posts,
  // newPostText: state.profileData.newPostText,
  profile: state.profileData.profile,
  profileStatus: state.profileData.profileStatus,
}
}

export default compose(
  withRouter,
  connect(mapStateToProps,{SetUserProfileThunk,SetProfileStatusThunk,UpdateProfileStatusThunk,UpdateAvaThunk})
  )(ProfileContainer)